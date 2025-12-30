import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('INITIALIZING KERNEL...');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }

                // Random progress jumps for hacker feel
                const jump = Math.random() * 15;
                const next = Math.min(prev + jump, 100);

                // Update status text based on progress
                if (next < 30) setStatus('LOADING MODULES...');
                else if (next < 60) setStatus('DECRYPTING ASSETS...');
                else if (next < 90) setStatus('ESTABLISHING SECURE CONNECTION...');
                else setStatus('SYSTEM READY');

                return next;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-cyber-dark flex flex-col items-center justify-center font-mono text-cyber-blue"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <div className="w-80 max-w-[90%]">
                <div className="flex justify-between mb-2 text-xs">
                    <span>{status}</span>
                    <span>{Math.floor(progress)}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-1 w-full bg-cyber-blue/20 overflow-hidden relative">
                    {/* Progress Fill */}
                    <motion.div
                        className="h-full bg-cyber-blue shadow-[0_0_10px_#00f0ff]"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>

                {/* Decorative Grid */}
                <div className="mt-8 grid grid-cols-4 gap-1 opacity-50">
                    {[...Array(16)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-1 w-1 bg-cyber-blue rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                repeatDelay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
