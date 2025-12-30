import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props: any) => {
    const ref = useRef<any>(null);
    const sphere = useMemo(() => {
        return random.inSphere(new Float32Array(8000), { radius: 1.8 }) as Float32Array;
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

const Nebula = (props: any) => {
    const ref = useRef<any>(null);
    const sphere = useMemo(() => {
        return random.inSphere(new Float32Array(3000), { radius: 2.2 }) as Float32Array;
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta / 15;
            ref.current.rotation.y += delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ff00ff"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
};

const CyberCanvas = () => {
    return (
        <div className="fixed inset-0 z-[-1] h-full w-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: true }}>
                <Stars />
                <Nebula />
            </Canvas>
        </div>
    );
};

export default CyberCanvas;
