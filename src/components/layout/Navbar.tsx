import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaWifi, FaBatteryFull } from 'react-icons/fa';

import useSound from '../../hooks/useSound';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const play = useSound();
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const prefersDark = useMemo(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches, []);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return prefersDark ? 'dark' : 'light';
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Clock Timer
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme sync
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    play('click');
  };

  const handleSectionClick = (hash: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SKILLS', hash: '#skills' },
    { name: 'PROJECTS', hash: '#projects' },
    { name: 'CONTACT', hash: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b border-cyber-blue/20 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">

        {/* Left: Brand & Status */}
        <div className="flex items-center gap-4">
         
          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-cyber-blue/60 border-l border-cyber-blue/30 pl-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              SYSTEM ONLINE
            </span>
          </div>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-cyber-blue/5 border border-cyber-blue/10 px-2 py-1 rounded-full backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                play('click');
                if (item.path) navigate(item.path);
                else if (item.hash) handleSectionClick(item.hash);
              }}
              onMouseEnter={() => play('hover')}
              className="px-4 py-1.5 text-xs text-cyber-blue hover:text-white hover:bg-cyber-blue/20 rounded-full transition-all duration-300 font-mono tracking-widest relative group overflow-hidden"
            >
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Right: HUD Data */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs text-cyber-blue/80">
          <div className="flex flex-col items-end leading-tight">
            <span>NASHIK, IN</span>
            <span className="opacity-50">19.9993° N, 73.7900° E</span>
          </div>
          <div className="h-8 w-px bg-cyber-blue/20"></div>
          <div className="flex flex-col items-end leading-tight min-w-[80px]">
            <span>{time.toLocaleTimeString([], { hour12: false })}</span>
            <span className="opacity-50 tracking-wider">UTC+05:30</span>
          </div>
          <div className="flex items-center gap-3 text-cyber-blue">
            <FaWifi title="Connection Stable" />
            <FaBatteryFull title="Power Optimal" />
            
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cyber-blue hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-cyber-blue/30 pb-6 shadow-2xl">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.path) {
                    setIsOpen(false);
                    navigate(item.path);
                  } else if (item.hash) {
                    handleSectionClick(item.hash);
                  }
                }}
                className="p-3 text-left border-l-2 border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue font-mono hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all"
              >
                {item.name}
              </button>
            ))}
            
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs font-mono text-gray-500">
              <span>SYSTEM STATUS: NORMAL</span>
              <span>{time.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;