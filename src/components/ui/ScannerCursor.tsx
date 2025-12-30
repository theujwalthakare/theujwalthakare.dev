import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const ScannerCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cyber-card') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto'; // Restore cursor on unmount
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Cursor (Crosshair) */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className={`relative flex items-center justify-center transition-all duration-300 ${isHovering ? 'scale-150' : 'scale-100'}`}>
                    {/* Center Dot */}
                    <div className="h-1 w-1 bg-cyber-blue rounded-full absolute" />

                    {/* Outer Ring/Brackets */}
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-all duration-300 ${isHovering ? 'rotate-90 opacity-100' : 'rotate-0 opacity-60'}`}
                    >
                        <path d="M10 2L2 2L2 10" stroke="#00f0ff" strokeWidth="1" />
                        <path d="M30 2L38 2L38 10" stroke="#00f0ff" strokeWidth="1" />
                        <path d="M38 30L38 38L30 38" stroke="#00f0ff" strokeWidth="1" />
                        <path d="M2 30L2 38L10 38" stroke="#00f0ff" strokeWidth="1" />
                    </svg>

                    {/* Scanning Line (Only on Hover) */}
                    {isHovering && (
                        <motion.div
                            initial={{ top: '0%' }}
                            animate={{ top: '100%' }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="absolute w-full h-[1px] bg-cyber-pink opacity-50"
                        />
                    )}
                </div>
            </motion.div>

            {/* Trailing Effect */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998] h-2 w-2 rounded-full bg-cyber-pink/50 blur-sm"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            />
        </>
    );
};

export default ScannerCursor;
