import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = (hash: string) => {
      const target = document.querySelector(hash);
      if (!target) return;
      const navHeight = document.querySelector('nav')?.offsetHeight ?? 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    if (location.hash) {
      requestAnimationFrame(() => {
        scrollToTarget(location.hash);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(74,163,255,0.1)_0%,rgba(3,11,29,0.0)_48%,rgba(255,106,31,0.12)_100%)]" />
        <div className="absolute -left-24 top-10 h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-[34rem] w-[34rem] rounded-full bg-violet/20 blur-3xl" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
