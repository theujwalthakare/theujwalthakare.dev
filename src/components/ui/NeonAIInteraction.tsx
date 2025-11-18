import { Suspense, useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Line, 
  Points, 
  PointMaterial, 
  Sparkles, 
  OrbitControls, 
  MeshTransmissionMaterial, 
  MeshDistortMaterial,
  Environment,
  Float
} from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { FiMic, FiPause, FiSend } from 'react-icons/fi';

// --- Types ---

type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking' | 'error';
type DisplayMode = 'hybrid' | 'orb' | 'globe';

type NeonAIController = {
  voiceState: VoiceState;
  transcript: string;
  amplitude: number;
  isSupported: boolean;
  startListening?: () => Promise<void> | void;
  stopListening?: () => void;
  speak?: (text: string) => void;
  forceState?: (state: VoiceState) => void;
};

type NeonAIInteractionViewProps = {
  className?: string;
  controller: NeonAIController;
  initialDisplayMode?: DisplayMode;
  showModeToggle?: boolean;
  showStateButtons?: boolean;
  showVoiceControls?: boolean;
  showTranscript?: boolean;
  showSidePanel?: boolean;
  headline?: string;
  kicker?: string;
  description?: string;
  onOrbActivate?: () => void;
};

type NeonAIInteractionProps = Omit<NeonAIInteractionViewProps, 'controller'>;

type VoiceMeta = {
  label: string;
  description: string;
  accent: string;
  ring: string;
  intensity: number;
};

type VoiceHookResult = {
  voiceState: VoiceState;
  transcript: string;
  amplitude: number;
  isSupported: boolean;
  startListening: () => Promise<void>;
  stopListening: () => void;
  speak: (text: string) => void;
  forceState: (state: VoiceState) => void;
};

// --- Browser Speech API Types ---

type SpeechRecognitionAlternative = {
  transcript?: string;
};

type SpeechRecognitionResultLike = {
  0?: SpeechRecognitionAlternative;
  length: number;
};

type SpeechRecognitionEventLike = Event & {
  resultIndex: number;
  results: ArrayLike<SpeechRecognitionResultLike>;
};

type SpeechRecognitionInstance = EventTarget & {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onstart: (() => void) | null;
  onerror: ((event: Event) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

// --- Constants ---

const ORB_VARIANTS = {
  idle: { scale: 1, opacity: 1, blur: '0px', boxShadow: '0 0 30px rgba(0,224,255,0.2)' },
  listening: { scale: 1.1, opacity: 1, blur: '0px', boxShadow: '0 0 50px rgba(0,224,255,0.4)' },
  thinking: { scale: 0.95, opacity: 0.9, blur: '2px', boxShadow: '0 0 30px rgba(174,123,255,0.3)' },
  speaking: { scale: 1.05, opacity: 1, blur: '0px', boxShadow: '0 0 60px rgba(0,224,255,0.5)' },
  error: { scale: 0.9, opacity: 0.8, blur: '1px', boxShadow: '0 0 40px rgba(255,59,111,0.4)' },
};

const DISPLAY_MODES: { value: DisplayMode; label: string }[] = [
  { value: 'orb', label: 'Orb' },
  { value: 'globe', label: 'Globe' },
  { value: 'hybrid', label: 'Hybrid' },
];

const STATE_SAMPLE_RESPONSES: Record<VoiceState, string> = {
  idle: '',
  listening: '',
  thinking: '',
  speaking: 'I am visualizing the data streams securely.',
  error: 'Connection interrupted.',
};

const NETWORK_ANCHORS = [
  { lat: 40.7128, lon: -74.0060 }, // NY
  { lat: 51.5074, lon: -0.1278 },  // London
  { lat: 35.6762, lon: 139.6503 }, // Tokyo
  { lat: 1.3521, lon: 103.8198 },  // Singapore
  { lat: -33.8688, lon: 151.2093 } // Sydney
];

const VOICE_META: Record<VoiceState, VoiceMeta> = {
  idle: {
    label: 'Idle',
    description: 'Core stability at 98%. Awaiting input.',
    accent: '#00e0ff',
    ring: 'rgba(0, 224, 255, 0.55)',
    intensity: 0.2,
  },
  listening: {
    label: 'Listening',
    description: 'Audio sensors active. Analyzing waveform.',
    accent: '#00ff9d',
    ring: 'rgba(0, 255, 157, 0.6)',
    intensity: 0.8,
  },
  thinking: {
    label: 'Processing',
    description: 'Neural layout mapping in progress.',
    accent: '#ae7bff',
    ring: 'rgba(174, 123, 255, 0.6)',
    intensity: 0.6,
  },
  speaking: {
    label: 'Active',
    description: 'Synthesizing vocal output.',
    accent: '#00e0ff',
    ring: 'rgba(0, 224, 255, 0.7)',
    intensity: 1.0,
  },
  error: {
    label: 'Offline',
    description: 'Network instability detected.',
    accent: '#ff3b6f',
    ring: 'rgba(255, 59, 111, 0.6)',
    intensity: 0.1,
  },
};

// --- Math Utils ---

const toCartesian = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

const buildArc = (start: THREE.Vector3, end: THREE.Vector3, amplitude: number): THREE.Vector3[] => {
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(amplitude);
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  return curve.getPoints(20);
};

const buildParticleField = (count: number, radius: number) => {
  const particles = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const r = radius * (0.8 + Math.random() * 0.4);
    particles[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    particles[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    particles[i * 3 + 2] = r * Math.cos(phi);
  }
  return particles;
};

// --- 2D UI Components ---

const AuraHalo = ({ accent, amplitude }: { accent: string; amplitude: number }) => (
  <motion.div
    className="orb-aura"
    style={{ boxShadow: `0 0 60px ${accent}55` }}
    animate={{
      scale: [1.05, 1.16 + amplitude * 0.08, 1.05],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const OrbRings = ({ accent, voiceState, amplitude }: { accent: string; voiceState: VoiceState; amplitude: number }) => {
  const baseRings = useMemo(() => [0, 1, 2], []);
  return (
    <>
      {baseRings.map((index) => {
        const delay = index * 0.45;
        const baseScale = 1.12 + index * 0.14;
        const listeningPulse = voiceState === 'listening' ? 0.25 : 0.08;
        const speakingPulse = voiceState === 'speaking' ? 0.35 : 0.1;
        const scaleBoost = voiceState === 'listening' ? listeningPulse : voiceState === 'speaking' ? speakingPulse : 0.06;
        const opacity = voiceState === 'error' ? 0.15 : 0.35 + index * 0.08;

        return (
          <motion.span
            key={`ring-${index}`}
            className="orb-ring"
            style={{ borderColor: `${accent}44`, boxShadow: `0 0 25px ${accent}33` }}
            animate={{
              scale: [baseScale, baseScale + scaleBoost + amplitude * 0.2, baseScale],
              opacity: [opacity, opacity + 0.18, opacity],
            }}
            transition={{ duration: voiceState === 'listening' ? 2 : 4, repeat: Infinity, ease: 'easeInOut', delay }}
          />
        );
      })}
    </>
  );
};

const ParticleHalo = ({ accent }: { accent: string }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }).map(() => ({
        radius: 52 + Math.random() * 18,
        size: 6 + Math.random() * 4,
        speed: 12 + Math.random() * 6,
      })),
    []
  );

  return (
    <>
      {particles.map((particle, index) => (
        <motion.span
          key={`particle-${index}`}
          className="orb-particle"
          style={{
            width: particle.size,
            height: particle.size,
            marginLeft: -particle.size / 2,
            marginTop: -particle.size / 2,
            background: `radial-gradient(circle, ${accent}88 0%, transparent 70%)`,
            transformOrigin: `${particle.radius}px center`,
          }}
          animate={{
            rotate: 360,
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{ duration: particle.speed, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
        />
      ))}
    </>
  );
};

const NeuralFluid = ({ accent, amplitude, voiceState }: { accent: string; amplitude: number; voiceState: VoiceState }) => {
  const blobs = useMemo(
    () =>
      Array.from({ length: 7 }).map(() => ({
        x: (Math.random() - 0.5) * 60,
        y: (Math.random() - 0.5) * 40,
        delay: Math.random() * 3,
        scale: 0.8 + Math.random() * 0.9,
      })),
    []
  );

  const tint = voiceState === 'error' ? '#ff3b6f' : accent;

  return (
    <motion.div
      className="orb-fluid"
      animate={{ rotate: [-2, 2, -2], scale: [0.96, 1.02 + amplitude * 0.05, 0.96] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      style={{ borderColor: `${tint}40`, boxShadow: `inset 0 0 60px ${tint}25` }}
    >
      <motion.div
        className="orb-fluid-core"
        animate={{ backgroundPositionX: ['0%', '120%', '0%'], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{ borderColor: `${tint}40` }}
      />
      {blobs.map((blob, index) => (
        <motion.span
          key={`blob-${index}`}
          className="orb-fluid-blob"
          style={{
            left: `${50 + blob.x}%`,
            top: `${50 + blob.y}%`,
            background: `radial-gradient(circle, ${tint}99 0%, transparent 70%)`,
          }}
          animate={{
            y: [12, -12, 12],
            scale: [blob.scale, blob.scale * (1.2 + amplitude * 0.4), blob.scale],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{ duration: 6 + index * 0.6, repeat: Infinity, ease: 'easeInOut', delay: blob.delay }}
        />
      ))}
      <motion.div
        className="orb-fluid-fog"
        animate={{ opacity: [0.1, 0.3 + amplitude * 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: `radial-gradient(circle, ${tint}33 0%, transparent 65%)` }}
      />
    </motion.div>
  );
};

const VoiceOrb = ({ voiceState, amplitude }: { voiceState: VoiceState; amplitude: number }) => {
  const variant = ORB_VARIANTS[voiceState];
  const accent = VOICE_META[voiceState].accent;
  const auraAccent = voiceState === 'thinking' ? '#ae7bff' : accent;

  return (
    <motion.div
      className="ai-orb-surface h-full w-full"
      style={{ filter: `blur(${variant.blur})`, boxShadow: variant.boxShadow, opacity: variant.opacity }}
      animate={{ scale: variant.scale }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
    >
      <AuraHalo accent={auraAccent} amplitude={amplitude} />
      <div className="ai-orb-halo" style={{ borderColor: `${accent}33` }} />
      <motion.div
        className="ai-orb-grid absolute inset-0"
        animate={{ rotateZ: ['0deg', '360deg'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        style={{ opacity: 0.45 }}
      />
      <ParticleHalo accent={accent} />
      <NeuralFluid accent={accent} amplitude={amplitude} voiceState={voiceState} />
      <OrbRings accent={accent} voiceState={voiceState} amplitude={amplitude} />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {voiceState === 'idle' && (
          <div className="absolute inset-[20%] animate-[orb-breathe_6s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(0,224,255,0.3)_0%,rgba(0,180,255,0.05)_60%,transparent_100%)]" />
        )}

        {voiceState === 'listening' && (
          <div className="absolute inset-0">
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="orb-sonar-ring"
                style={{ borderColor: `${accent}66` }}
                animate={{ scale: [0.8, 1.5], opacity: [1, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.6, ease: 'easeOut' }}
              />
            ))}
          </div>
        )}

        {voiceState === 'thinking' && (
          <motion.div
            className="absolute inset-[24%] rounded-full border border-white/5"
            style={{ boxShadow: `0 0 40px ${accent}55` }}
            animate={{ rotate: [0, 45, -45, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-4 rounded-full border border-white/10"
              animate={{ rotate: [0, -60, 60, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        )}

        {voiceState === 'speaking' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-[3px]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          >
            {Array.from({ length: 12 }).map((_, index) => {
              const normalized = (index / 12) * Math.PI;
              const level = 0.4 + Math.abs(Math.sin(normalized + amplitude * Math.PI)) * 1.4;
              return (
                <motion.span
                  key={index}
                  className="orb-wave-bar w-1 rounded-full"
                  style={{
                    height: 20,
                    backgroundColor: accent,
                    boxShadow: `0 0 12px ${accent}`,
                  }}
                  animate={{ scaleY: level }}
                />
              );
            })}
          </motion.div>
        )}

        {voiceState === 'error' && (
          <motion.div
            className="absolute inset-[22%] rounded-full border border-neon-red/40"
            style={{ boxShadow: '0 0 35px rgba(255, 59, 111, 0.9)' }}
            animate={{ x: [-3, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 rounded-full border border-neon-red/30" />
          </motion.div>
        )}
      </div>

      <motion.div
        className="pointer-events-none absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/70 px-5 py-2 text-[10px] uppercase tracking-[0.45em]"
        style={{ color: accent }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent, boxShadow: `0 0 16px ${accent}` }} />
        {VOICE_META[voiceState].label}
      </motion.div>
    </motion.div>
  );
};

// --- 3D Globe Components ---

const CameraDrift = ({ amplitude }: { amplitude: number }) => {
  const driftRef = useRef({ offset: 0 });
  useFrame((state) => {
    driftRef.current.offset += 0.0035;
    const radius = 5.8 + Math.sin(driftRef.current.offset * 0.6) * 0.1;
    const x = Math.sin(driftRef.current.offset) * 0.35;
    const y = Math.cos(driftRef.current.offset * 0.6) * 0.25;
    state.camera.position.x = x + amplitude * 0.4;
    state.camera.position.y = y + amplitude * 0.3;
    state.camera.position.z = radius;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

// ** The Inner Floating Ambient Liquid **
const AmbientCore = ({ accent, amplitude }: { accent: string; amplitude: number }) => {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      // Slow, hypnotic rotation
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={coreRef} scale={0.85}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color={accent}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.1}
            roughness={0.1}
            distort={0.3 + (amplitude * 0.5)} // Reacts to voice
            speed={2 + (amplitude * 4)}       // Speeds up on voice
          />
        </mesh>
      </Float>
      
      {/* Inner Glow Sprites */}
      <Sparkles 
        count={25} 
        scale={1.4} 
        size={5} 
        speed={0.4} 
        opacity={0.6} 
        color={accent} 
      />
    </group>
  );
};

const NeonGlobe = ({ voiceState, amplitude }: { voiceState: VoiceState; amplitude: number }) => {
  const accent = VOICE_META[voiceState].accent;
  const groupRef = useRef<THREE.Group>(null);
  
  const nodesPositions = useMemo(() => NETWORK_ANCHORS.map((anchor) => toCartesian(anchor.lat, anchor.lon, 1.45)), []);
  const arcs = useMemo(() => {
    const radius = 1.45;
    const vectors = NETWORK_ANCHORS.map((anchor) => toCartesian(anchor.lat, anchor.lon, radius));
    const bundle: THREE.Vector3[][] = [];
    vectors.forEach((vector, index) => {
      const target = vectors[(index + 3) % vectors.length];
      bundle.push(buildArc(vector, target, radius + 0.2));
    });
    return bundle;
  }, []);
  const particles = useMemo(() => buildParticleField(520, 1.9), []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.05;
    }
  });

  return (
    <group>
      {/* 1. The Floating Liquid Core */}
      <AmbientCore accent={accent} amplitude={amplitude} />

      <group ref={groupRef}>
        {/* 2. The Glass Shell */}
        <mesh>
          {/* Radius 1.45 for the outer shell */}
          <sphereGeometry args={[1.45, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            roughness={0.1}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.1}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#ffffff"
            background={new THREE.Color('#020314')}
          />
        </mesh>

        {/* 3. The Wireframe Network (Subtle overlay) */}
        {/* <mesh>
           <sphereGeometry args={[1.46, 32, 32]} />
           <meshBasicMaterial color={accent} wireframe opacity={0.08} transparent />
        </mesh> */}

        <Points positions={particles} stride={3}>
          <PointMaterial transparent size={0.03} sizeAttenuation depthWrite={false} color={accent} opacity={0.4} blending={THREE.AdditiveBlending} />
        </Points>

        {nodesPositions.map((position, index) => (
          <mesh key={`node-${index}`} position={position}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshBasicMaterial color={accent} toneMapped={false} />
          </mesh>
        ))}

        {arcs.map((curvePoints, index) => (
          <Line 
            key={`arc-${index}`} 
            points={curvePoints} 
            color={accent} 
            opacity={0.2 + (amplitude * 0.3)} 
            transparent 
            lineWidth={1} 
            toneMapped={false} 
          />
        ))}
      </group>
    </group>
  );
};

// --- Main View Components ---

const ControlButton = ({ icon, label, active, disabled, onClick }: { icon: ReactNode; label: string; active: boolean; disabled?: boolean; onClick?: () => void }) => (
  <button
    type="button"
    className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-xs uppercase tracking-[0.4em] transition-all duration-300 ${
      active ? 'border-cyan-400/80 bg-cyan-400/20 text-cyan-400 shadow-[0_0_25px_rgba(0,224,255,0.35)]' : 'border-white/10 bg-white/5 text-white/60 hover:border-cyan-400/50 hover:text-cyan-400'
    } ${(disabled || !onClick) ? 'cursor-not-allowed opacity-40' : ''}`}
    disabled={disabled || !onClick}
    onClick={onClick}
  >
    <span className="text-base">{icon}</span>
    {label}
  </button>
);

const OrbVisual = ({ voiceState, amplitude, displayMode, onActivate }: { voiceState: VoiceState; amplitude: number; displayMode: DisplayMode; onActivate?: () => void }) => {
  const accent = VOICE_META[voiceState].accent;
  const interactive = typeof onActivate === 'function';

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!interactive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate?.();
    }
  };

  return (
    <div
      className={`relative mx-auto flex w-full max-w-[640px] items-center justify-center ${interactive ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60' : ''}`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? 'Activate voice assistant' : undefined}
      onClick={interactive ? onActivate : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
    >
      <div className="relative aspect-square w-full">
        {displayMode !== 'orb' && (
          <Canvas
            className="absolute inset-0"
            camera={{ position: [0, 0, 5.8], fov: 38 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.18} />
              <pointLight position={[4, 3, 6]} intensity={1.4} color={accent} />
              <pointLight position={[-4, -2, -5]} intensity={1.1} color="#0a1dff" />
              <directionalLight position={[1.6, 0, 2.2]} intensity={0.4} color="#ffffff" />
              <Environment preset="city" />
              <CameraDrift amplitude={amplitude} />
              <NeonGlobe amplitude={amplitude} voiceState={voiceState} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={(Math.PI / 2) * 1.35}
              />
            </Suspense>
          </Canvas>
        )}

        {displayMode !== 'globe' && (
          <div className="absolute inset-[12%] flex items-center justify-center">
            <VoiceOrb voiceState={voiceState} amplitude={amplitude} />
          </div>
        )}
      </div>
    </div>
  );
};

const NeonAIInteractionView = (props: NeonAIInteractionViewProps) => {
  const {
    className = '',
    controller,
    initialDisplayMode = 'hybrid',
    showModeToggle = true,
    showStateButtons = true,
    showVoiceControls = true,
    showTranscript = true,
    showSidePanel = true,
    headline = "NEON INTELLIGENCE",
    kicker = "SYSTEM ONLINE",
    description = "Voice interface active. Ready for query.",
    onOrbActivate
  } = props;

  const [displayMode, setDisplayMode] = useState<DisplayMode>(initialDisplayMode);
  const { voiceState, transcript, amplitude, isSupported, startListening, stopListening, speak, forceState } = controller;
  const accent = VOICE_META[voiceState].accent;

  return (
    <section className={`relative flex h-[600px] w-full overflow-hidden rounded-3xl bg-[#00000300] ${className}`}>
      {/* Main Visual Area */}
      <div className="relative flex-1">
        <OrbVisual 
          voiceState={voiceState} 
          amplitude={amplitude} 
          displayMode={displayMode} 
          onActivate={onOrbActivate}
        />
      </div>

      {/* Side Panel/HUD */}
      {showSidePanel && (
        <aside className="absolute right-0 top-0 h-full w-[320px] overflow-y-auto border-l  p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-8">
            <header className="space-y-2">
              <span className="rounded bg-cyan-900/30 px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-400">{kicker}</span>
              <h2 className="font-sans text-xl font-bold tracking-widest text-white">{headline}</h2>
              <p className="text-sm leading-relaxed text-white/60">{description}</p>
            </header>

            <div className="space-y-6">
              {showModeToggle && (
                <div className="flex flex-wrap gap-2">
                  {DISPLAY_MODES.map((mode) => (
                    <button
                      key={mode.value}
                      type="button"
                      onClick={() => setDisplayMode(mode.value)}
                      className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-widest transition-all duration-300 ${
                        displayMode === mode.value
                          ? 'border-cyan-400/80 bg-cyan-400/20 text-cyan-400'
                          : 'border-white/10 bg-white/5 text-white/60 hover:border-cyan-400/40 hover:text-cyan-400'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="mb-2 text-[10px] uppercase tracking-widest text-white/50">System State</h3>
                <p className="text-xs text-white/80">{VOICE_META[voiceState].description}</p>
                {showStateButtons && forceState && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(Object.keys(VOICE_META) as VoiceState[]).map((state) => (
                      <button
                        key={state}
                        onClick={() => forceState(state)}
                        className={`h-6 w-6 rounded-full border border-white/10 text-[10px] transition-colors hover:border-cyan-400 hover:bg-cyan-900/50 ${state === voiceState ? 'bg-cyan-400' : ''}`}
                        title={`Force state: ${state}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {showVoiceControls && (
                <div className="grid grid-cols-3 gap-2">
                  <ControlButton
                    icon={<FiMic />}
                    label="Rec"
                    onClick={startListening ? () => void startListening() : undefined}
                    disabled={!isSupported || voiceState === 'listening' || !startListening}
                    active={voiceState === 'listening'}
                  />
                  <ControlButton
                    icon={<FiPause />}
                    label="Halt"
                    onClick={stopListening}
                    disabled={!isSupported || voiceState === 'idle' || !stopListening}
                    active={false}
                  />
                  <ControlButton
                    icon={<FiSend />}
                    label="Talk"
                    onClick={speak ? () => speak(STATE_SAMPLE_RESPONSES[voiceState] || "System ready.") : undefined}
                    disabled={!isSupported || !speak}
                    active={voiceState === 'speaking'}
                  />
                </div>
              )}

              {showTranscript && (
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <h4 className="mb-2 text-[10px] uppercase tracking-widest text-white/40">Log Stream</h4>
                  <p className="min-h-[40px] font-mono text-xs text-cyan-400/90 break-words">
                    {transcript || '> Waiting for input...'}
                  </p>
                  {!isSupported && (
                    <p className="mt-2 text-[10px] text-red-400">
                      Web Speech API unavailable.
                    </p>
                  )}
                </div>
              )}
            </div>

            <footer className="mt-auto flex items-center justify-between text-[10px] uppercase tracking-widest text-white/30">
               <span>Amp: {(amplitude * 100).toFixed(0)}%</span>
               <span style={{ color: accent }}>{voiceState}</span>
            </footer>
          </div>
        </aside>
      )}
    </section>
  );
};

// --- Controller Logic ---

const useVoiceOrbController = (): VoiceHookResult => {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [transcript, setTranscript] = useState('');
  const [amplitude, setAmplitude] = useState(0);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const amplitudeLoopRef = useRef<number | undefined>(undefined);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const thinkingTimeoutRef = useRef<number | undefined>(undefined);
  const speakingRafRef = useRef<number | undefined>(undefined);

  const stopAmplitudeLoop = () => {
    if (amplitudeLoopRef.current !== undefined) {
      cancelAnimationFrame(amplitudeLoopRef.current);
      amplitudeLoopRef.current = undefined;
    }
  };

  const clearThinkingTimeout = () => {
    if (thinkingTimeoutRef.current !== undefined) {
      window.clearTimeout(thinkingTimeoutRef.current);
      thinkingTimeoutRef.current = undefined;
    }
  };

  const stopSpeakingLoop = () => {
    if (speakingRafRef.current !== undefined) {
      cancelAnimationFrame(speakingRafRef.current);
      speakingRafRef.current = undefined;
    }
  };

  const releaseStream = () => {
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
    analyserRef.current?.disconnect();
    analyserRef.current = null;
    stopAmplitudeLoop();
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const RecognitionCtor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!RecognitionCtor) {
      setIsSupported(false);
      setVoiceState('error');
      return;
    }

    setIsSupported(true);
    const recognition = new RecognitionCtor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => setVoiceState('listening');

    recognition.onerror = () => {
      setVoiceState('error');
      releaseStream();
    };

    recognition.onresult = (event: SpeechRecognitionEventLike) => {
      let combined = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        combined += event.results[i][0]?.transcript ?? '';
      }
      setTranscript(combined.trim());
      clearThinkingTimeout();
      setVoiceState('thinking');
      thinkingTimeoutRef.current = window.setTimeout(() => {
        setVoiceState('idle');
      }, 1400);
    };

    recognition.onend = () => {
      releaseStream();
      stopSpeakingLoop();
      if (voiceState !== 'error') {
        setVoiceState('idle');
      }
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
      releaseStream();
      clearThinkingTimeout();
      stopSpeakingLoop();
    };
  }, []); 

  useEffect(() => {
    if (voiceState !== 'speaking') {
      stopSpeakingLoop();
      return;
    }

    const animate = () => {
      const time = performance.now() * 0.0015;
      const level = 0.4 + Math.abs(Math.sin(time * Math.PI)) * 0.5;
      setAmplitude(level);
      speakingRafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      stopSpeakingLoop();
    };
  }, [voiceState]); 
  const startListening = async () => {
    if (!isSupported || voiceState === 'listening') return;
    const RecognitionCtor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!RecognitionCtor) {
      setVoiceState('error');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      const audioContext = audioContextRef.current ?? new AudioContext();
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.7;
      source.connect(analyser);
      analyserRef.current = analyser;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const sample = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        const sum = dataArray.reduce((acc, value) => acc + value, 0);
        const average = sum / bufferLength;
        setAmplitude(Math.min(1, average / 140));
        amplitudeLoopRef.current = requestAnimationFrame(sample);
      };

      stopAmplitudeLoop();
      sample();

      recognitionRef.current?.start();
      setVoiceState('listening');
    } catch (error) {
      console.warn('Voice orb microphone capture failed', error);
      setVoiceState('error');
      releaseStream();
    }
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    releaseStream();
    setAmplitude(0);
    clearThinkingTimeout();
    stopSpeakingLoop();
    setVoiceState((prev) => (prev === 'error' ? 'error' : 'idle'));
  };

  const speak = (text: string) => {
    if (!text || typeof window === 'undefined') return;
    stopListening();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setVoiceState('speaking');
    utterance.onend = () => {
      stopSpeakingLoop();
      setVoiceState('idle');
      setAmplitude(0);
    };
    utterance.onerror = () => {
      stopSpeakingLoop();
      setVoiceState('error');
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const forceState = (state: VoiceState) => {
    if (state === 'listening') {
      void startListening();
      return;
    }
    stopListening();
    stopSpeakingLoop();
    setVoiceState(state);
    if (state === 'idle') {
      setAmplitude(0.1);
    }
    if (state === 'error') {
      setTranscript('');
    }
  };

  return {
    voiceState,
    transcript,
    amplitude,
    isSupported,
    startListening,
    stopListening,
    speak,
    forceState,
  };
};

const NeonAIInteraction = (props: NeonAIInteractionProps) => {
  const controller = useVoiceOrbController();
  return <NeonAIInteractionView controller={controller} {...props} />;
};

export type { VoiceState, NeonAIController, NeonAIInteractionViewProps };
export { NeonAIInteractionView, useVoiceOrbController };
export default NeonAIInteraction;