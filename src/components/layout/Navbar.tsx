import { useCallback, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionLinks = [
    { name: 'About', hash: '#about' },
    { name: 'Skills', hash: '#skills' },
    { name: 'Experience', hash: '#experience' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Contact', hash: '#contact' },
  ];

  const scrollToHash = useCallback((hash: string) => {
    const targetElement = document.querySelector(hash);
    if (!targetElement) return;
    const navbarHeight = document.querySelector('nav')?.offsetHeight ?? 0;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }, []);

  const handleSectionClick = useCallback(
    (hash: string) => {
      setIsOpen(false);
      const onHome = location.pathname === '/' || location.pathname === '';
      if (onHome) {
        scrollToHash(hash);
      } else {
        navigate({ pathname: '/', hash });
      }
    },
    [location.pathname, navigate, scrollToHash],
  );

  const sharedLinkClasses =
    'font-mono text-white hover:text-cyber-blue transition-colors duration-300';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-dark/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-center  items-center">
        <div className="hidden md:flex items-center space-x-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${sharedLinkClasses} ${isActive ? 'text-cyber-blue' : ''}`
            }
            onClick={() => setIsOpen(false)}
            end
          >
            Home
          </NavLink>

          {sectionLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              className={sharedLinkClasses}
              onClick={() => handleSectionClick(link.hash)}
            >
              {link.name}
            </button>
          ))}

          {/* {pageLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${sharedLinkClasses} ${isActive ? 'text-cyber-blue' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))} */}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden justify-end text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-light border-t border-cyber-blue/30">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={sharedLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {sectionLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                className={sharedLinkClasses}
                onClick={() => handleSectionClick(link.hash)}
              >
                {link.name}
              </button>
            ))}

            {/* {pageLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={sharedLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))} */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;