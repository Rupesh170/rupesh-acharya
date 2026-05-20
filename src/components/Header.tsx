import { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-contrast-low">
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
