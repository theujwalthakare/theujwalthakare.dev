import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScannerCursor from '../ui/ScannerCursor';
import ChatTerminal from '../ui/ChatTerminal';
import CyberCanvas from '../ui/CyberCanvas';

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
      <CyberCanvas />
      <ScannerCursor />

      {/* HUD Corner Brackets */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[49]">
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-blue/50 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyber-blue/50 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyber-blue/50 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-blue/50 rounded-br-lg" />
        {/* HUD Lines */}
        <div className="absolute top-8 left-0 h-[calc(100%-4rem)] w-px bg-cyber-blue/10" />
        <div className="absolute top-8 right-0 h-[calc(100%-4rem)] w-px bg-cyber-blue/10" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
        <ChatTerminal />
      </div>
    </div>
  );
};

export default Layout;