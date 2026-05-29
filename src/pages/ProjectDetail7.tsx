import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundImages = [
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965779/BIM_1_1_k03bu2.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965790/BIM_1_2_dvnnhw.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965791/BIM_1_3_uhmw4l.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965780/BIM_1_4_sg97et.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965770/BIM_1_5_rek0d3.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965769/BIM_1_6_uwtxrz.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965765/BIM_1_7_rrdkc5.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965765/BIM_1_8_vhct0w.png',
];

export default function ProjectDetail7() {
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
            <PTag variant="primary">BIM Modeling</PTag>
            <PTag variant="secondary">Geospatial Context</PTag>
            <PTag variant="secondary">3D City Model</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            BIM Modeling in Geospatial Context
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            Comprehensive BIM modeling and geolocation in a 3D City model - bridging detailed architectural design with macro-scale geographic environments.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Project Type', value: 'BIM + GIS Integration' },
              { label: 'Scale', value: 'Multi-Story Corporate Building' },
              { label: 'Application', value: 'Asset Management' },
              { label: 'Software', value: 'Revit, D5 Render' },
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
                This project demonstrates a highly integrated workflow that bridges the gap between detailed architectural design and macro-scale geographic environments. By embedding a fully realized, multi-story corporate building model—complete with comprehensive interior spatial design, multi-tiered structural stairwells, and complex atrium glazing—directly into a surrounding 3D city grid, this work showcases the powerful convergence of Building Information Modeling (BIM) and Geographic Information Systems (GIS).
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                While BIM traditionally isolates a structure within its own local coordinate system, contextualizing it within a wider georeferenced 3D city model transforms it into an intelligent asset. This synergy is fundamentally reshaping the lifecycle management of modern infrastructure.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">The Critical Importance of Georeferenced BIM</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-md">
                {[
                  { n: '1', title: 'Dynamic Data Convergence', desc: 'Instead of viewing a building as an isolated static entity, it becomes an interactive cell within the city\'s living network. It allows municipalities to sync real-time IoT sensor telemetry (such as HVAC performance, energy consumption, and structural health) with macro-scale geographic dashboards.' },
                  { n: '2', title: 'Asset Management', desc: 'Facility managers and municipal authorities can seamlessly transition from a bird\'s-eye view of an entire city district down to a specific internal utility room or structural beam, optimizing maintenance workflows across thousands of assets.' },
                  { n: '3', title: 'Utility Clash Detection', desc: 'Georeferencing the BIM model allows designers to cross-reference the building\'s foundational piles and deep drainage systems with existing GIS layers of municipal water mains, fiber-optic arrays, electrical grids, and subway tunnels, eliminating catastrophic site construction strikes.' },
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





