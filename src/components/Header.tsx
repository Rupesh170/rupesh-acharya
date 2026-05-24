import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PButton, PIcon } from '@porsche-design-system/components-react';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Research', path: '/research' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Check if we're on a ProjectDetail page that should have auto-hide header
  const isAutoHideRoute = /^\/projects\/[^/]+$/.test(location.pathname);

  useEffect(() => {
    if (!isAutoHideRoute) {
      setIsHeaderVisible(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Show header if mouse is in top 60px
      if (e.clientY < 60) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isAutoHideRoute]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isAutoHideRoute && !isHeaderVisible ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        backgroundColor: (isAutoHideRoute && !isHeaderVisible) ? 'transparent' : 'var(--surface-bg, #ffffff)',
        borderColor: (isAutoHideRoute && !isHeaderVisible) ? 'transparent' : 'var(--contrast-low, #e0e0e0)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-fluid-md flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-static-sm no-underline">
          <PIcon name="globe" size="medium" color="primary" aria-hidden="true" />
          <span className="prose-heading-sm text-primary font-bold tracking-wider">Rupesh <span style={{ color: '#d5001c' }}>Acharya</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-fluid-sm">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors no-underline px-static-xs py-static-xs hover:text-primary ${
                location.pathname === path
                  ? 'text-primary border-b-2 border-[#d5001c]'
                  : 'text-contrast-medium'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link to="/contact">
            <PButton variant="primary" compact type="button">Message Me</PButton>
          </Link>
        </div>

        <button
          className="md:hidden p-static-xs text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <PIcon name={menuOpen ? 'close' : 'menu-lines'} size="medium" aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-canvas border-t border-contrast-low px-fluid-md py-fluid-sm">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="block py-static-sm text-sm font-medium text-contrast-medium hover:text-primary no-underline border-b border-contrast-low last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-fluid-sm">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <PButton variant="primary" type="button">Message Me</PButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
