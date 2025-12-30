import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DecryptedTextProps {
    text: string;
    className?: string;
    speed?: number;
    maxIterations?: number;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const DecryptedText: React.FC<DecryptedTextProps> = ({
    text = '',
    className = '',
    speed = 50,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const intervalRef = useRef<number | null>(null);
    const elementRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(elementRef, { once: true });

    const startAnimation = () => {
        if (!text) return;
        setIsAnimating(true);
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            setDisplayText(() => {
                const result = text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';

                        let shouldReveal = false;
                        if (revealDirection === 'start') {
                            shouldReveal = index < iteration;
                        } else if (revealDirection === 'end') {
                            shouldReveal = index > text.length - iteration;
                        } else if (revealDirection === 'center') {
                            const center = Math.floor(text.length / 2);
                            shouldReveal = Math.abs(index - center) < iteration;
                        }

                        if (shouldReveal) return text[index];

                        if (useOriginalCharsOnly) {
                            const randomOriginal = text[Math.floor(Math.random() * text.length)];
                            return randomOriginal === ' ' ? CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)] : randomOriginal;
                        }

                        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    })
                    .join('');

                return result;
            });

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setIsAnimating(false);
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        if (isInView && !isAnimating) {
            startAnimation();
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isInView, text]);

    return (
        <motion.span
            ref={elementRef}
            className={`inline-block font-mono ${className}`}
            onMouseEnter={startAnimation}
        >
            {displayText}
        </motion.span>
    );
};

export default DecryptedText;
