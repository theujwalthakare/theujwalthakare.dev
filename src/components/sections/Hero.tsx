import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GuideOrbAssistant from '../ui/GuideOrbAssistant';

const HERO_TYPING_PHRASES = ['Fullstack Developer', 'Cyber Security Enthusiast'];

const RotatingTyping = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = HERO_TYPING_PHRASES[phraseIndex];
    let timeout: number;

    if (!isDeleting && subIndex === currentPhrase.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && subIndex === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % HERO_TYPING_PHRASES.length);
      }, 300);
    } else {
      timeout = window.setTimeout(() => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? 60 : 120);
    }

    return () => window.clearTimeout(timeout);
  }, [phraseIndex, subIndex, isDeleting]);

  return (
    <span className="typing-text" aria-label={HERO_TYPING_PHRASES[phraseIndex]}>
      {HERO_TYPING_PHRASES[phraseIndex].slice(0, subIndex)}
    </span>
  );
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to use in the rain
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz !@#$%^&*()_+[]{}|;:,.<>?/~`';
    const charArray = chars.split('');

    // Font size and columns
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track the y position of each drop
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Drawing the characters
    const draw = () => {
      // Black background with opacity to create trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = '#00f0ff';
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset some drops to the top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 35);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate columns
      const newColumns = Math.floor(canvas.width / fontSize);
      
      // Reset drops array
      drops.length = 0;
      for (let i = 0; i < newColumns; i++) {
        drops[i] = Math.random() * -100;
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-[120vh] items-center lg:h-screen">
      {/* Matrix rain background */}
      <div className="absolute inset-0 bg-cyber-dark z-0">
        <canvas ref={canvasRef} className="w-full h-full opacity-30" />
      </div>
      
      {/* Glowing lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-blue to-cyber-dark"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-pink to-cyber-dark"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center lg:gap-12">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-2xl md:text-6xl font-dystopian text-white mb-4">
              <span className="block">I'AM</span>
              <span className="text-cyber-blue animate-glow">UJWAL THAKARE</span>
            </h1>

            <div className="h-1 w-32 bg-cyber-pink mb-6"></div>

            <h2 className="mb-8 text-left text-xl font-mono text-gray-300 md:text-2xl">
              <RotatingTyping />
            </h2>

            <p className="text-gray-400 mb-8 max-w-lg">
              Building digital experiences with a focus on performance, security, and cutting-edge design.
              Let's create something extraordinary together.
            </p>

            <a href="#about" className="cyber-button">
              Explore My Work
            </a>

            <div className="mt-10 flex flex-col items-center gap-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:items-stretch">
              <Link
                to="/blogs"
                className="flex w-full max-w-[240px] items-center justify-center gap-2 rounded border border-cyber-blue/40 bg-cyber-dark/70 px-3 py-2 text-center text-xs font-mono uppercase tracking-[0.08em] text-cyber-blue transition hover:border-cyber-blue/80 hover:bg-cyber-blue/10 sm:max-w-none sm:justify-between sm:text-left sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.2em]"
              >
                Blog Posts <span className="hidden text-[0.6rem] tracking-[0.3em] text-gray-400 sm:inline">/Latest</span>
              </Link>
              <Link
                to="/case-studies"
                className="flex w-full max-w-[240px] items-center justify-center gap-2 rounded border border-cyber-blue/40 bg-cyber-dark/70 px-3 py-2 text-center text-xs font-mono uppercase tracking-[0.08em] text-cyber-blue transition hover:border-cyber-blue/80 hover:bg-cyber-blue/10 sm:max-w-none sm:justify-between sm:text-left sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.3em]"
              >
                Case Studies <span className="hidden text-[0.6rem] tracking-[0.3em] text-gray-400 sm:inline">/Deep Dives</span>
              </Link>
              <Link
                to="/study-material"
                className="flex w-full max-w-[240px] items-center justify-center gap-2 rounded border border-cyber-blue/40 bg-cyber-dark/70 px-3 py-2 text-center text-xs font-mono uppercase tracking-[0.08em] text-cyber-blue transition hover:border-cyber-blue/80 hover:bg-cyber-blue/10 sm:max-w-none sm:justify-between sm:text-left sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.3em]"
              >
                Study Vault <span className="hidden text-[0.6rem] tracking-[0.3em] text-gray-400 sm:inline">/Resources</span>
              </Link>
            </div>
          </div>

          <div className="flex w-full max-w-[360px] flex-col items-center lg:mx-auto lg:max-w-[560px]">
            <GuideOrbAssistant className="w-full justify-center" orbClassName="w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[640px]" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cyber-blue">
          <FaChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;