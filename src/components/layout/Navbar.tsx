import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Contact', hash: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const handleSectionClick = (hash: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    const element = document.querySelector(hash);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav
      className={`fixed top-0 z-[100] w-full h-16 border-b transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
      style={
        scrolled
          ? {
              backgroundColor: 'var(--nav-bg-scrolled)',
              borderColor: 'var(--nav-border)',
            }
          : undefined
      }
    >
      <div className="mx-auto flex max-w-7xl select-none items-center justify-between px-4 py-4 md:px-8">
        <h2
          onClick={() => navigate('/')}
          className="cursor-pointer font-headline text-2xl font-bold text-[var(--text)] transition hover:text-cyan"
        >
          Ujwal Thakare
        </h2>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleSectionClick(item.hash)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:text-cyan"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--panel-bg)] text-[var(--text)] transition hover:border-cyan/50 hover:text-cyan"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--panel-bg)] text-[var(--text)] transition hover:border-cyan/50 hover:text-cyan"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <button
            className="text-[var(--text)] transition hover:text-cyan"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="border-t px-4 py-4 backdrop-blur-xl md:hidden"
          style={{
            borderColor: 'var(--nav-border)',
            backgroundColor: 'var(--panel-bg)',
          }}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.hash}
                onClick={() => handleSectionClick(item.hash)}
                className="rounded-lg border border-cyan/15 px-3 py-2 text-left font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition hover:border-cyan/40 hover:text-cyan"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
