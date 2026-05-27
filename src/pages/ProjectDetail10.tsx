import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundImages = [
  '/BIM_4_1.png',
  '/BIM_4_2.png',
  '/BIM_4_3.png',
  '/BIM_4_4.png',
];

export default function ProjectDetail10() {
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
            <PTag variant="primary">BIM Rendering</PTag>
            <PTag variant="secondary">Commercial Warehouse</PTag>
            <PTag variant="secondary">3D Modeling</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Architectural BIM Rendering
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            High-fidelity 3D modeling and rendering of a modern commercial warehouse facility with comprehensive design layout and data-driven BIM intelligence.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Project Type', value: 'Commercial Warehouse' },
              { label: 'Focus', value: 'BIM Rendering & Modeling' },
              { label: 'Scope', value: 'Structural & Site Design' },
              { label: 'Software', value: 'Revit, Twinmotion' },
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
                This project showcases a high-fidelity 3D model and rendering of a modern commercial warehouse facility. The visual assets demonstrate a comprehensive design layout, detailing structural steel framing, modular insulated wall panels, integrated administrative office blocks, and precise peripheral site grading for heavy vehicle logistics.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                While traditional 3D modeling focuses heavily on superficial surface aesthetics and visual approximations, Building Information Modeling (BIM) introduces an entirely different paradigm. It embeds intelligent, object-oriented data into every aspect of the geometry. For modern architecture and engineering, the transition from legacy CAD or basic 3D mesh modeling to a data-driven BIM ecosystem is a fundamental shift from "drawing shapes" to "building database-backed structures."
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">The Technical Importance of BIM Over Traditional Modeling</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-md">
                {[
                  { 
                    n: '1', 
                    title: 'Parametric Object Intelligence vs. Dead Geometry',
                    desc: 'In traditional 3D modeling or draft-based CAD, a building component (like a wall, column, or window) is merely a collection of unlinked lines or hollow, independent polygons. In a BIM environment, every element is a parametric object packed with real-world metadata. A wall is not just a surface; it is an intelligent assembly that knows its exact layer compositions, material thermal conductivity, structural load-bearing capacity, acoustic ratings, cost, and manufacturer data. This intelligence enables informed design decisions and lifecycle management.'
                  },
                  { 
                    n: '2', 
                    title: 'Multi-Disciplinary Coordination and Clash Detection',
                    desc: 'One of the most expensive risks in construction is discovering that different design layers—such as structural steel, HVAC ducts, electrical conduits, and plumbing mains—physically overlap on the job site. Traditional 3D visualization models are typically built in isolation by the architect. A coordinated BIM workflow brings the Architectural (AR), Structural (S), and Mechanical, Electrical, and Plumbing (MEP) models into a single unified space. Automated clash-detection algorithms scan the entire unified model, flagging exact spatial conflicts during the design phase and preventing costly field change orders.'
                  },
                  { 
                    n: '3', 
                    title: 'True Lifecycle Management and Open Data Interoperability',
                    desc: 'The utility of a traditional 3D render effectively terminates once the marketing or conceptual approval phase is complete. A BIM asset serves as an authoritative database throughout the building\'s entire lifecycle. By leveraging open interoperability standards like Industry Foundation Classes (IFC) and Construction Operations Building Information Exchange (COBie), the data built up during design can be directly handed over to Facility Management (FM) operations. When the physical structure is complete, facility managers can interact with the digital model to access equipment warranties, maintenance histories, and operational parameters, transforming the initial design file into a living, functional digital twin.'
                  },
                  { 
                    n: '4', 
                    title: 'Accurate Material Take-Offs (MTO) and Cost Estimation (5D BIM)',
                    desc: 'Traditional estimation requires estimators to manually measure distances, scale drawings, and count elements from 2D sheets or static 3D files—a process highly vulnerable to human error. Because every component in BIM is quantified by its true physical parameters, material volumes, surface areas, and component counts are derived directly from the model database. This allows for real-time cost estimation (5D BIM) during design iterations. Architects can instantly see the financial impact of switching from concrete masonry units to pre-cast panels, ensuring the project remains tightly aligned with budgetary constraints.'
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





