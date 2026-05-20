import { Link } from 'react-router-dom';
import { PDivider, PIcon, PText } from '@porsche-design-system/components-react';

const footerLinks = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Research', path: '/research' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-surface mt-fluid-2xl">
      <div className="max-w-[1440px] mx-auto px-fluid-md py-fluid-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-xl">
          <div>
            <div className="flex items-center gap-static-sm mb-fluid-sm">
              <PIcon name="globe" size="medium" color="primary" aria-hidden="true" />
              <span className="prose-heading-sm text-primary font-bold tracking-wider">Rupesh <span style={{ color: '#d5001c' }}>Acharya</span></span>
            </div>
            <PText color="contrast-medium" size="small">
              Precision Mapping, 3D Modeling, Digital Twins & CAD Solutions.
            </PText>
          </div>

          <div>
            <PText weight="semi-bold" size="small" tag="p" className="mb-fluid-sm">Navigation</PText>
            <nav className="flex flex-col gap-static-xs">
              {footerLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <PText weight="semi-bold" size="small" tag="p" className="mb-fluid-sm">Connect</PText>
            <div className="flex flex-col gap-static-sm">
              <a
                href="mailto:geospatial@example.com"
                className="flex items-center gap-static-xs text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon name="email" size="small" aria-hidden="true" />
                geospatial@example.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-static-xs text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon name="logo-linkedin" size="small" aria-hidden="true" />
                LinkedIn Profile
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-static-xs text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon name="phone" size="small" aria-hidden="true" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        <PDivider className="my-fluid-lg" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-static-sm">
          <PText size="xx-small" color="contrast-medium">
            © {new Date().getFullYear()} Rupesh Acharya. All rights reserved.
          </PText>
          <PText size="xx-small" color="contrast-medium">
            Precision Mapping · 3D Modeling · Digital Twins · CAD Deliverables
          </PText>
        </div>
      </div>
    </footer>
  );
}
