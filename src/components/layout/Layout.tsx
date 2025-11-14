import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MatrixRain from '../ui/MatrixRain';

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
      // Delay to let the new route render before scrolling.
      requestAnimationFrame(() => {
        scrollToTarget(location.hash);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;