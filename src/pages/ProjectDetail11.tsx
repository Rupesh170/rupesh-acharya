import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundImages = [
  '/GIS_1_1.jpg',
  '/GIS_1_2.jpg',
  '/GIS_1_3.jpg',
  '/GIS_1_4.jpg',
  '/GIS_1_5.jpg',
];

export default function ProjectDetail11() {
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
            <PTag variant="primary">3D GIS Modeling</PTag>
            <PTag variant="secondary">City-Scale Model</PTag>
            <PTag variant="secondary">Urban Planning</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            3D GIS Modeling
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            City-scale 3D GIS model showcase featuring a comprehensive 3D city model of Pokhara City for sustainable planning and infrastructure development.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Project Type', value: 'City-Scale 3D Model' },
              { label: 'Location', value: 'Pokhara City' },
              { label: 'Application', value: 'Urban Planning & GIS' },
              { label: 'Software', value: 'Blender, Lumion' },
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
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-fluid-2xl">
            <div className="lg:col-span-2">
              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Project Overview</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                Moving from traditional flat 2D maps to City-Scale 3D GIS Modeling is a massive leap forward. For a rapidly growing city with a delicate environmental and geological footprint like Pokhara, having a data-rich 3D spatial framework is absolutely critical for sustainable planning, safety, and infrastructure development.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                This comprehensive 3D city model of Pokhara integrates geospatial data, urban topography, and building information to create a powerful planning and visualization tool that serves multiple stakeholder needs—from municipal administration to tourism and investment.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-md">The Critical Importance of 3D GIS Modeling</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-lg">
                {[
                  { 
                    n: '1', 
                    title: 'Managing Vertical Growth & Sky-Lines',
                    desc: '3D GIS models allow municipal authorities to visualize and enforce smart zoning laws. Planners can run automated height restrictions and view-corridor analyses to ensure new hospitality or commercial high-rises do not block iconic views of Machapuchare and the Annapurna range, preserving the city\'s aesthetic and economic identity while managing vertical growth sustainably.'
                  },
                  { 
                    n: '2', 
                    title: 'Property Tax and Cadastral Modernization',
                    desc: 'Traditional 2D land records struggle with multi-story, mixed-use buildings. A 3D GIS framework enables a 3D Cadastre system, allowing the city to map, manage, and value individual floors or units accurately within a georeferenced space. This improves tax compliance, property rights management, and reduces disputes over boundary delineation in complex urban environments.'
                  },
                  { 
                    n: '3', 
                    title: 'Urban Flood and Setback Modeling',
                    desc: 'By overlaying hydrological datasets onto the 3D model, engineers can simulate heavy monsoon runoff patterns and precise flood inundation zones along the Seti River corridor and around Phewa Lake. This helps establish data-backed building setbacks and drainage infrastructure, protecting vulnerable populations and critical assets from recurring natural disasters.'
                  },
                  { 
                    n: '4', 
                    title: 'Line-of-Sight and Smart Connectivity',
                    desc: 'Telecommunication engineers utilize the 3D city model to run Line-of-Sight (LoS) analyses. This ensures optimal placement for 5G nodes, cellular towers, and disaster sirens along ridges and tall structures, preventing signal dropouts caused by terrain or building shadows and enabling reliable emergency communication networks.'
                  },
                  { 
                    n: '5', 
                    title: 'Interactive Urban Digital Twins',
                    desc: 'This 3D model functions as the core foundation for interactive web platforms or virtual reality applications. Tourists and investors can virtually tour lakeside districts, explore paragliding flight paths relative to landing zones, and preview hotel views before booking, boosting the regional hospitality sector sustainably and enabling immersive urban experiences.'
                  },
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
