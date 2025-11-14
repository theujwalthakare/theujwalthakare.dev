import { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';

type GuideOrbProps = {
  className?: string;
  isActive?: boolean;
  onToggle?: () => void;
};

type StringDefinition = {
  geometry: THREE.BufferGeometry;
  color: string;
  rotationSpeed: number;
  waveSpeed: number;
  waveAmplitude: number;
  yOffset: number;
  verticalTilt: number;
  instance?: THREE.LineLoop;
};

const GuideOrb = ({ className = '', isActive = false, onToggle }: GuideOrbProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const activeRef = useRef(isActive);

  useEffect(() => {
    activeRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 20);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const initialWidth = container.clientWidth || 320;
    const initialHeight = container.clientHeight || initialWidth;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(initialWidth, initialHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambient);

    const spotA = new THREE.SpotLight(0x030d09, 1.2);
    spotA.position.set(3, 3, 3);
    scene.add(spotA);

    const spotB = new THREE.SpotLight(0x00f0ff, 0.9);
    spotB.position.set(-3, -2, -3);
    scene.add(spotB);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0x000504,
      emissive: 0x02bf3e,
      emissiveIntensity: 0.4,
      transparent: true,
      shininess: 1,
    });
    const innerSphere = new THREE.Mesh(new THREE.SphereGeometry(1.28, 96, 96), innerMaterial);
    mainGroup.add(innerSphere);

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#3ffc85'),
      transparent: true,
      opacity: 0.28,
      side: THREE.BackSide,
    });
    const glowSphere = new THREE.Mesh(new THREE.SphereGeometry(1.28, 94, 94), glowMaterial);
    mainGroup.add(glowSphere);

    const wireframeGeometry = new THREE.WireframeGeometry(new THREE.SphereGeometry(1.28, 64, 64));
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x03ffdd, transparent: true, opacity: 0.8 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    mainGroup.add(wireframe);

    const latLongGroup = new THREE.Group();
    const latLongGeometries = createLatLongLines();
    const latLongMaterials: THREE.LineBasicMaterial[] = [];
    latLongGeometries.forEach((geometry) => {
      const material = new THREE.LineBasicMaterial({ color: 0x91ffb2, transparent: true, opacity: 0.91  });
      const lines = new THREE.LineSegments(geometry, material);
      latLongGroup.add(lines);
      latLongMaterials.push(material);
    });
    mainGroup.add(latLongGroup);

    const stringGroup = new THREE.Group();
    const stringDefinitions = createMusicalStrings();
    const stringMaterials: THREE.LineBasicMaterial[] = [];
    stringDefinitions.forEach((definition) => {
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(definition.color),
        transparent: true,
        opacity: 0.6,
      });
      const line = new THREE.LineLoop(definition.geometry, material);
      line.position.set(0, definition.yOffset, 0);
      stringGroup.add(line);
      definition.instance = line;
      stringMaterials.push(material);
    });
    mainGroup.add(stringGroup);

    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      innerSphere.rotation.y = t * 0.12;
      innerSphere.rotation.x = Math.sin(t * 0.1) * 0.04;

      wireframe.rotation.y = t * 0.35;
      wireframe.rotation.x = Math.sin(t * 0.2) * 0.05;

      const baseScale = activeRef.current ? 1.25 : 1.18;
      const glowScale = baseScale + Math.sin(t * 2) * 0.05;
      glowSphere.scale.setScalar(glowScale);

      (latLongGroup.children as THREE.Object3D[]).forEach((child, index) => {
        child.rotation.y = t * (0.2 + index * 0.05);
      });

      stringDefinitions.forEach((definition, index) => {
        if (!definition.instance) return;
        definition.instance.rotation.y = t * definition.rotationSpeed;
        definition.instance.rotation.x = definition.verticalTilt;
        const pulse = 1 + Math.sin(t * definition.waveSpeed + index) * definition.waveAmplitude;
        definition.instance.scale.set(1, pulse, 1);
      });

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const resizeRenderer = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      const width = clientWidth || 320;
      const height = clientHeight || width;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', resizeRenderer);
    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(resizeRenderer);
      resizeObserver.observe(container);
    }

    resizeRenderer();

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeRenderer);
      resizeObserver?.disconnect();
      container.removeChild(renderer.domElement);

      latLongGeometries.forEach((geometry) => geometry.dispose());
      latLongMaterials.forEach((material) => material.dispose());
      stringDefinitions.forEach((definition) => definition.geometry.dispose());
      stringMaterials.forEach((material) => material.dispose());
      innerSphere.geometry.dispose();
      innerMaterial.dispose();
      glowSphere.geometry.dispose();
      glowMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!onToggle) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  }, [onToggle]);

  return (
    <div
      role={onToggle ? 'button' : undefined}
      tabIndex={onToggle ? 0 : undefined}
      aria-pressed={onToggle ? isActive : undefined}
      aria-label={onToggle ? 'Tap to talk with the assistant' : undefined}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className={`relative isolate aspect-square w-full max-w-[320px] select-none overflow-hidden rounded-full border border-cyber-blue/20 bg-transparent transition-shadow duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-blue/70 ${
        isActive ? 'shadow-[0_0_60px_rgba(0,240,255,0.45)]' : 'shadow-[0_0_30px_rgba(0,240,255,0.12)]'
      } ${onToggle ? 'cursor-pointer' : ''} ${className}`}
    >
      <div ref={containerRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 rounded-full border border-cyber-blue/10" />
      <div className="pointer-events-none absolute -inset-5 rounded-full bg-cyber-blue/5 blur-3xl" />
    </div>
  );
};

export default GuideOrb;

const createLatLongLines = () => {
  const geometries: THREE.BufferGeometry[] = [];
  const radius = 1.33;
  const meridianCount = 18;
  const parallelAngles = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75];
  const segments = 220;

  parallelAngles.forEach((angle) => {
    const phi = THREE.MathUtils.degToRad(angle);
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.sin(theta);
      points.push(new THREE.Vector3(x, y, z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    geometries.push(geometry);
  });

  for (let m = 0; m < meridianCount; m++) {
    const theta = (m / meridianCount) * Math.PI * 2;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const phi = -Math.PI / 2 + (i / segments) * Math.PI;
      const x = radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.sin(theta);
      points.push(new THREE.Vector3(x, y, z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    geometries.push(geometry);
  }

  return geometries;
};

const createMusicalStrings = (): StringDefinition[] => {
  const segments = 140;
  const definitions = [
    {
      radius: 1.55,
      yOffset: 0.0,
      color: '#60A5FA',
      rotationSpeed: 0.4,
      waveSpeed: 2.4,
      waveAmplitude: 0.06,
      verticalTilt: THREE.MathUtils.degToRad(65),
    },
    {
      radius: 1.7,
      yOffset: 0.18,
      color: '#F87171',
      rotationSpeed: -0.35,
      waveSpeed: 2.1,
      waveAmplitude: 0.05,
      verticalTilt: THREE.MathUtils.degToRad(75),
    },
    {
      radius: 1.85,
      yOffset: -0.22,
      color: '#C084FC',
      rotationSpeed: 0.48,
      waveSpeed: 2.7,
      waveAmplitude: 0.07,
      verticalTilt: THREE.MathUtils.degToRad(55),
    },
  ];

  return definitions.map((definition) => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array((segments + 1) * 3);

    for (let i = 0; i <= segments; i += 1) {
      const theta = (i / segments) * Math.PI * 2;
      const x = definition.radius * Math.cos(theta);
      const z = definition.radius * Math.sin(theta);
      positions[i * 3] = x;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.computeBoundingSphere();

    return {
      geometry,
      color: definition.color,
      rotationSpeed: definition.rotationSpeed,
      waveSpeed: definition.waveSpeed,
      waveAmplitude: definition.waveAmplitude,
      yOffset: definition.yOffset,
      verticalTilt: definition.verticalTilt,
    } as StringDefinition;
  });
};
