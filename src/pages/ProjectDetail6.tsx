import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';


const backgroundMedia = [
  { type: 'video', src: '/3D_2.mp4' },
  { type: 'image', src: '/3D_4_1.PNG' },
  { type: 'image', src: '/3D_4_2.png' },
  { type: 'image', src: '/3D_4_3.PNG' },
  { type: 'image', src: '/3D_4_4.PNG' },
  { type: 'image', src: '/3D_4_5.gif' },
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
            <PTag variant="secondary">3D Landscape Design</PTag>
            <PTag variant="secondary">LiDAR</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            3D Landscape Design of Yosemite National Park
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            LiDAR-based terrain modeling and procedural forest generation in Unreal Engine for game development, VFX production, and environmental conservation.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Location', value: 'Yosemite, CA' },
              { label: 'Technology', value: 'Unreal Engine 5' },
              { label: 'Data Source', value: 'LiDAR + GIS' },
              { label: 'Process', value: 'PCG Framework' },
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
                This project showcases the successful integration of high-resolution LiDAR (Light Detection and Ranging) elevation datasets and GIS spatial data into Unreal Engine to construct a true-to-life digital twin of a section of Yosemite National Park. By pairing absolute real-world topography with advanced material texturing and Procedural Content Generation (PCG) framework for dense, native vegetation distribution, this workflow moves spatial data past static 2D boundaries into a highly responsive, interactive 3D environment.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                The convergence of authoritative geographical surveys and real-time game engine physics opens up massive possibilities, fundamentally transforming workflows in game development and several immersive engineering disciplines.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-md">Key Cross-Disciplinary Applications</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-lg">
                {[
                  { n: '1', title: 'Game Development & Level Design', desc: 'Traditionally, environment artists spend hundreds of hours manually sculpting mountain ranges, valleys, and cliff faces. With real-world LiDAR data, level designers can skip the manual block-out phase by importing exact, 1:1 scale real-world locations. This ensures instant believable macro-topography, allowing teams to focus entirely on gameplay loops, pacing, and asset optimization. Using real-world LiDAR data captures true erosion patterns, scree slopes, and natural drainage paths. When paired with Unreal Engine\'s PCG system, foliage can be procedurally spawned based on real spatial attributes—slope angle, moisture accumulation layers, and elevation—creating incredibly organic, naturally distributed ecosystems that elevate player immersion.' },
                  { n: '2', title: 'Virtual Production, VFX, and Cinematic Environments', desc: 'The film and television industry increasingly relies on real-time rendering environments (such as LED volumes) to shoot scenes without traveling to remote, logistically challenging locations. For productions set in iconic locations like Yosemite, this workflow provides a highly accurate, game-ready virtual asset. Directors can control the sun angle, alter weather systems dynamically, and choreograph camera flyovers with absolute confidence that the scale, horizon line, and rock textures perfectly match reality.' },
                  { n: '3', title: 'Eco-Tourism & Environmental Simulation', desc: 'National parks and conservation bodies face the continuous challenge of balancing public access with ecological preservation. This application serves as a high-fidelity simulator for virtual tourism and educational outreach. Users can interactively navigate fragile ecosystems—like Yosemite\'s high-altitude meadows and pine forests—without causing physical foot-traffic degradation. Foresters and environmental engineers can use the model to run predictive simulations by manipulating tree density, fuel loads, and dynamic wind vectors to visually model wildfire propagation paths through complex mountain topography.' },
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
