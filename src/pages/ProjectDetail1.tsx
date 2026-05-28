import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundMedia = [
  { type: 'video', src: 'https://res.cloudinary.com/drndctvgz/video/upload/v1779965127/Mt_Everest_oumh2p.mp4' },
  { type: 'image', src: '/Photo_1.png' },
  { type: 'image', src: '/Photo_2.png' },
  { type: 'image', src: '/Photo_3.png' },
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
            <PTag variant="primary">Digital Twin</PTag>
            <PTag variant="secondary">GIS</PTag>
            <PTag variant="secondary">3D Modeling</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            3D Digital Twin Terrain App
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            Mt Everest as Digital Twin Terrain - an interactive, high-fidelity 3D model transitioning static geospatial data into a fully dynamic, immersive ecosystem.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Platform', value: 'Unreal Engine' },
              { label: 'Region', value: 'Mount Everest' },
              { label: 'Application', value: 'Exploration & Simulation' },
              { label: 'Key Feature', value: 'Real-time Dynamics' },
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
              <PHeading size="x-large" tag="h2" className="mb-fluid-sm">Project Overview</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                This project showcases an interactive, high-fidelity 3D Digital Twin of the Mount Everest (Sagarmatha) region, developed natively within Unreal Engine. The application transitions static geospatial datasets into a fully dynamic, immersive ecosystem. By featuring an Explore Mode (3D terrain inspector for macro-scale analysis), a Jump In Mode (a human-scale, third-person simulator for ground-level exploration), and a Dynamic Daylight Changing Mode (for real-time solar tracking and shadow propagation), this application bridges the gap between raw spatial data and real-time interactive simulation.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                When high-resolution Digital Elevation Models (DEMs) and realistic textures are deployed inside a real-time physics engine, the resulting 3D Digital Twin evolves far beyond a visual asset. It becomes an authoritative simulation platform with cross-disciplinary applications.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">Cross-Disciplinary Applications of the 3D Digital Twin</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-md">
                {[
                  { n: '1', title: 'Route Familiarization and Hazard Scouting', desc: 'Utilizing the Explore Mode, expedition leaders and high-altitude guides can virtually scout the complex geometry of the Khumbu region. Teams can analyze slope gradients, identify potential avalanche paths, and plot safer alternative routes before committing valuable resources to risky terrain.' },
                  { n: '2', title: 'Ground-Level Visibility Analysis', desc: 'The Jump In Mode lets operators drop down to a human eye-level perspective to evaluate real-time lines of sight from specific camp coordinates, determining if localized topography blocks crucial radio or telemetry paths essential for expedition coordination.' },
                  { n: '3', title: 'Time-Critical Simulations', desc: 'In an emergency, rescue coordinators can use the Dynamic Daylight Mode to pinpoint exactly when deep glacial valleys or sheer faces (like the Kangshung Face) will fall into shadow, optimizing helicopter rescue windows and ground team deployment schedules.' },
                  { n: '4', title: 'Immersive Virtual Trekking', desc: 'Before travelers set foot in Nepal, the application provides an interactive pre-trip orientation. Trekkers can traverse a 1:1 scale digital twin of the route from Lukla to Everest Base Camp, mentally and physically preparing for elevation profiles and challenging terrain variations.' },
                  { n: '5', title: 'Interactive Conservation Displays', desc: 'For national park visitor centers, museums, or educational platforms, the application serves as an engaging, gamified interface. Users can toggle daylight cycles to understand how solar radiation interacts with mountain ecosystems, fostering deeper public engagement with environmental conservation.' },
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
