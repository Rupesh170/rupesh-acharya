import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundImages = [
  '/3D_3_1.png',
  '/3D_3_2.png',
  '/3D_3_3.png',
  '/3D_3_4.png',
  '/3D_3_5.png',
];

export default function ProjectDetail5() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fadingIn, setFadingIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadingIn(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        setFadingIn(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image cycling */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${backgroundImages[currentImage]})`,
            opacity: fadingIn ? 1.0 : 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-fluid-md text-center">
          <div className="flex gap-static-sm mb-fluid-md flex-wrap justify-center">
            <PTag variant="primary">3D Modeling</PTag>
            <PTag variant="secondary">Additive Manufacturing</PTag>
            <PTag variant="secondary">3D Printing</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            3D Print City Modeling
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            3D Print ready cityscape modeling of San Francisco Bay Area optimized for additive manufacturing and urban planning applications.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Region', value: 'San Francisco Bay' },
              { label: 'Output Format', value: '3D Printable Mesh' },
              { label: 'Application', value: 'Urban Planning' },
              { label: 'Process', value: 'GIS to Print' },
            ].map(({ label, value }) => (
              <div key={label}>
                <PText size="x-small" theme="dark"  tag="p">{label}</PText>
                <PText size="medium" theme="dark" weight="semi-bold" tag="p">{value}</PText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-fluid-lg bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-fluid-lg">
            <div className="lg:col-span-2">
              <PHeading size="x-large" tag="h1" className="mb-fluid-sm">Project Overview</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                This project features a highly detailed, solid-geometry 3D model of the San Francisco Bay Area cityscape, optimized specifically for additive manufacturing (3D printing). The model accurately captures the region's unique urban density, showing the progression from low-rise residential grids to the iconic, soaring skyscrapers of the Financial District, all bounded by the precise coastal topography of the bay.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                By converting complex, non-manifold geospatial and architectural data into a unified, watertight mesh, 3D Print City Modeling transitions digital urban twins into the physical world. This cross-disciplinary workflow provides immense value across several professional fields.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">Key Applications</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-md">
                {[
                  { n: '1', title: 'Urban Planning, Zoning, and Public Consultation', desc: 'Municipalities and urban planners have long relied on physical models to conceptualize city growth. Tactile 3D-printed cityscapes revolutionize this process by allowing stakeholders to visualize proposed developments, enabling planners to print modular "plug-and-play" architectural pieces of new skyscrapers or transit hubs and physically insert them into the existing city grid to analyze spatial harmony and neighborhood fit. Physical models also streamline public approval by democratizing complex blueprinted data, enabling local citizens, government officials, and non-technical investors to instantly grasp the physical scale, height limitations, and community impact of a project during public hearings.' },
                  { n: '2', title: 'Real Estate Development and Architectural Marketing', desc: 'In high-stakes real estate markets like San Francisco, physical context is everything. Developers leverage 3D-printed city models as high-end marketing and design tools by conducting contextual sightline studies to showcase premium penthouse views or commercial floor visibility to prospective tenants through physically demonstrating how surrounding high-rises interact with the site. A tangible, precision-scaled model of an entire district functions as an impressive center-piece for investor galleries, immediately conveying the scale and prestige of an acquisition portfolio.' },
                  { n: '3', title: 'Technical Workflow and Geometric Precision', desc: 'Transforming massive GIS layers (such as OpenStreetMap or LiDAR building footprints) into a 3D-printable format requires meticulous geometric clean-up. The workflow addresses challenges like deleting intersecting internal faces, thickening fragile walls and bridges to meet minimum printing tolerances, and ensuring a completely flat, stable base slice. The resulting "clay-render" preview highlights the impeccable topology and clean structure necessary to guarantee a flawless, warp-free print on large-scale industrial 3D printers.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-fluid-sm">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1"
                      style={{ backgroundColor: '#d5001c' }}
                    >
                      {n}
                    </div>
                    <div>
                      <PText weight="semi-bold" tag="p" size="medium">{title}</PText>
                      <PText size="small" color="contrast-medium" tag="p">{desc}</PText>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 flex flex-col gap-fluid-md">
                <Link to="/contact">
                  <PButton variant="primary" icon="email" type="button">Discuss a Similar Project</PButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





