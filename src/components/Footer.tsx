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
                href="mailto:rupeshacharya277@gmail.com"
                className="flex items-center gap-static-xs text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon name="email" size="small" aria-hidden="true" />
                rupeshacharya277@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/rupesh-acharya11/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-static-xs text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon name="logo-linkedin" size="small" aria-hidden="true" />
                LinkedIn Profile
              </a>
              <a
                href="https://www.fiverr.com/s/3879l7m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-static-xs text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon size="small" aria-hidden="true" />
                Fiverr - Freelance Services
              </a>
              <a
                href="tel:+9779816637599"
                className="flex items-center gap-static-xs text-sm text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon name="phone" size="small" aria-hidden="true" />
                +977 981-6637599
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
