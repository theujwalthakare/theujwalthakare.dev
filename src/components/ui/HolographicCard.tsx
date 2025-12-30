import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HolographicCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

const HolographicCard: React.FC<HolographicCardProps> = ({
    children,
    className = '',
    spotlightColor = 'rgba(0, 240, 255, 0.15)'
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] group ${className}`}
            style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
            {/* Glass Shine */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-cyber-blue/30 transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default HolographicCard;
