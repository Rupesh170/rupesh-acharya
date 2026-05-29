import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';



const backgroundMedia = [
  { type: 'video', src: 'https://res.cloudinary.com/drndctvgz/video/upload/v1779965109/BIM_2_qkh7w3.mp4' },
  { type: 'image', src: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965809/BIM_2_1_vvb3qb.png' },
  { type: 'image', src: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965805/BIM_2_2_dqzsw9.png' },
];

export default function ProjectDetail1() {
  const [currentMedia, setCurrentMedia] = useState(0);
  const [fadingIn, setFadingIn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (backgroundMedia[currentMedia].type === 'video') {
      const handleVideoEnd = () => {
        setFadingIn(false);
        setTimeout(() => {
          setCurrentMedia((prev) => (prev + 1) % backgroundMedia.length);
          setFadingIn(true);
        }, 400);
      };

      const video = videoRef.current;
      if (video) {
        video.addEventListener('ended', handleVideoEnd);
        return () => video.removeEventListener('ended', handleVideoEnd);
      }
    } else {
      const interval = setInterval(() => {
        setFadingIn(false);
        setTimeout(() => {
          setCurrentMedia((prev) => (prev + 1) % backgroundMedia.length);
          setFadingIn(true);
        }, 400);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentMedia]);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background video/image cycling */}
        {backgroundMedia[currentMedia].type === 'video' ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{
              opacity: fadingIn ? 1.0 : 0,
            }}
          >
            <source src={backgroundMedia[currentMedia].src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${backgroundMedia[currentMedia].src})`,
              opacity: fadingIn ? 1.0 : 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-fluid-md text-center">
          <div className="flex gap-static-sm mb-fluid-md flex-wrap justify-center">
            <PTag variant="primary">Roadway Design</PTag>
            <PTag variant="secondary">Infrastructure</PTag>
            <PTag variant="secondary">Digital Twin</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Roadway Design Presentation in a Real Life Location
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            How interchange design concepts can be fused with real-time GIS data for immersive 3D model presentation, transforming BIM models into infrastructure digital twins.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Project Type', value: 'Highway Interchange Design' },
              { label: 'Focus', value: 'BIM + GIS Integration' },
              { label: 'Application', value: 'Infrastructure Digital Twin' },
              { label: 'Software', value: 'Infraworks, Civil 3D, Twinmotion' },
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
                This project demonstrates the powerful fusion of highway interchange engineering with real-time geographic data, creating a highly immersive 3D presentation. By taking conceptual roadway designs and geolocating them accurately within an authentic digital landscape—complete with detailed daytime and nighttime lighting, vehicle movement, and realistic surrounding vegetation—this work shows how a static infrastructure design evolves into a living Infrastructure Digital Twin.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                When dealing with large-scale linear assets like highways, overpasses, and grade-separated interchanges, isolating the design within traditional CAD software creates a massive blind spot. Merging Building Information Modeling (BIM) with Geographic Information Systems (GIS) solves this challenge, providing a comprehensive design-to-build pipeline that is essential for modern civil engineering.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">The Critical Importance of a BIM+GIS Roadway Design Approach</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-md">
                {[
                  { 
                    n: '1', 
                    title: 'Context-Aware Geometric Alignment & Corridor Selection',
                    desc: 'Roads must adapt to the earth, not the other way around. Merging structural BIM data with regional GIS elevation models ensures absolute context from day one. Engineers can instantly see how an overpass approach or sunken highway alignment interacts with real-world topography, allowing for precise adjustments to minimize mass earthworks and save millions in transport and excavation costs. A highway corridor requires vast strips of land—georeferenced designs overlay perfectly with parcel boundaries, environmental protection zones, and underground utilities, allowing planners to identify and resolve right-of-way conflicts long before construction.' 
                  },
                  { 
                    n: '2', 
                    title: 'Immersive Micro-Traffic and Sight-Distance Safety Studies',
                    desc: 'As seen in the daytime and nighttime simulations, high-fidelity 3D modeling allows engineers to analyze safety through the eyes of the driver. Virtual "drive-throughs" along complex loops and merges enable traffic engineers to evaluate whether bridge pillars, safety barriers, or landscaping obstruct a driver\'s line of sight. By shifting the model to nighttime environments, engineers can accurately simulate pole-mounted luminaire spreads, under-bridge lighting uniformity, and potential headlight glare, ensuring maximum safety during low-visibility conditions.'
                  },
                  { 
                    n: '3', 
                    title: 'Streamlining Public Consultation and Stakeholder Buy-In',
                    desc: 'Complex civil engineering blueprints are incredibly difficult for the general public to comprehend. The smooth flyover animation translates technical engineering tolerances into an intuitive visual narrative. Seeing how a massive overpass splits traffic and how the surrounding greenspace mitigates visual impact accelerates the approval process significantly, reducing controversy and stakeholder friction.'
                  },
                  { 
                    n: '4', 
                    title: 'Smart Asset Management and Digital Twin Operations',
                    desc: 'Once physical construction is complete, the georeferenced model transitions into an operational digital twin. Municipalities can anchor real-world asset IDs, pavement structural health data, bridge sensor telemetry, and traffic-counting cameras directly to specific 3D components within the model, streamlining long-term structural maintenance and enabling smart city management.'
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





