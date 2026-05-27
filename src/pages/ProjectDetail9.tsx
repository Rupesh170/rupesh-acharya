import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundImages = [
  '/BIM_3_1.png',
  '/BIM_3_2.png',
  '/BIM_3_3.png',
  '/BIM_3_4.png',
  '/BIM_3_5.png',
];

export default function ProjectDetail9() {
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
            <PTag variant="primary">BIM + GIS</PTag>
            <PTag variant="secondary">Civic Infrastructure</PTag>
            <PTag variant="secondary">Contextual Modeling</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            BIM + GIS Modeling
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            Townhall development concepts utilizing BIM and GIS for contextual modeling - embedding architectural precision within real-world geographic environments.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Project Type', value: 'Civic Infrastructure' },
              { label: 'Focus', value: 'BIM in GIS Terrain' },
              { label: 'Application', value: 'Site Feasibility & Analysis' },
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
                This project demonstrates a unified design methodology that places a detailed, multi-tiered Townhall community development model directly within a real-world, georeferenced GIS terrain model. By combining architectural precision with an authentic geographic environment—complete with surrounding vegetation and accurate topography—this project illustrates how a localized public structure interacts with its broader regional footprint.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                While individual CAD designs fail to account for the complexities of surrounding ecosystems and urban fabrics, a formalized BIM + GIS contextual modeling workflow provides a scalable blueprint for modern, resilient civic infrastructure.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">The Technical Importance of the BIM + GIS Integration Workflow</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-md">
                {[
                  { 
                    n: '1', 
                    title: 'High-Fidelity Site Feasibility and Land Administration',
                    desc: 'The workflow begins by marrying localized building geometry with wide-area spatial datasets, solving critical upfront engineering challenges. Public administrative buildings require absolute accessibility. Embedding the BIM model into a high-resolution GIS Digital Elevation Model (DEM) allows engineers to optimize the finished floor level (FFL) relative to natural slopes, reducing structural retaining wall costs and ensuring optimal grading for accessible walkways and public plazas. By pulling live municipal parcel layers into the design canvas, architects can instantly validate that the townhall structure, peripheral parking, and security perimeters comply with statutory zoning setbacks and right-of-way boundaries.'
                  },
                  { 
                    n: '2', 
                    title: 'Cohesive Microclimate and Solar Daylighting Analysis',
                    desc: 'A townhall is a prominent public space designed to operate efficiently across all seasons. Integrating detailed structural geometry into a georeferenced system allows for precision environmental testing. By assigning true geographic coordinates (latitude and longitude) to the BIM asset, designers can accurately simulate the sun\'s path across different seasons. This ensures that extensive glass elements—such as double-height curtain walls and main entry atriums—maximize passive winter solar gain while minimizing harsh summer glare and HVAC cooling overloads. The workflow allows planners to model how the new municipal building casts shadows over nearby residential areas or public greenspaces, ensuring compliance with local "right to light" ordinances.'
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





