import { Link } from 'react-router-dom';
import { useEffect, useState, useRef} from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundMedia = [
  { type: 'video', src: 'https://res.cloudinary.com/drndctvgz/video/upload/v1779965142/3D_1_mtu2gw.mp4' },
  { type: 'image', src: '/3D_1_1.PNG' },
  { type: 'image', src: '/3D_1_2.PNG' },

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
            <PTag variant="primary">3D Modeling</PTag>
            <PTag variant="secondary">Terrain Simulation</PTag>
            <PTag variant="secondary">Unreal Engine</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            3D Terrain Simulation of Glen Canyon
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            High-resolution 3D terrain flyover simulation of Glen Canyon area with accurate digital elevation data and realistic textures in Unreal Engine.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Region', value: 'Glen Canyon' },
              { label: 'Engine', value: 'Unreal Engine' },
              { label: 'Application', value: 'Infrastructure Planning' },
              { label: 'Data Type', value: 'High-Resolution DEM' },
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
              <PHeading size="x-large" tag="h1" className="mb-fluid-sm">3D Terrain Simulation of Glen Canyon</PHeading>
              <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mb-fluid-md">
                Realistic, high resolution 3D Terrain flyover simulation of Glen Canyon Area in Unreal Engine
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
              While this high-resolution 3D aerial flyover of the Glen Canyon region provides a stunning visual representation of the area’s rugged geology and the winding Colorado River, its true value lies beneath the surface. This simulation demonstrates a highly accurate, data-driven digital twin of complex topography, showcasing a workflow that is critical for modern engineering, environmental management, and infrastructure development.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">Core Applications</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                Simulations of this fidelity are foundational for various engineering disciplines that interact with large-scale natural environments
              </PText>

               <PHeading size="large" tag="h2" className="mb-fluid-sm">Civil Infrastructure & Site Planning</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
              For projects like highway routing, bridge construction, or dam monitoring (highly relevant to the Glen Canyon area), 3D terrain models allow engineers to conduct virtual site assessments. They can calculate cut-and-fill volumes, determine optimal grading, and assess the structural viability of slopes before physical work begins.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">Hydrological Modeling & Flood Risk</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
              The detailed elevation data captures natural drainage basins and the precise path of the river. Hydrologists use these models to simulate water flow, predict flood inundation zones, and manage water resources. By altering water levels within the simulation, engineers can foresee the impacts of drought or heavy rainfall on the surrounding terrain.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">Geotechnical & Hazard Assessment</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
              The prominent vertical striations and steep cliff faces visible in the render represent potential areas of geological instability. Geotechnical engineers use these high-resolution meshes to identify fracture zones, model rockfall trajectories, and predict landslide risks, allowing for preemptive safety measures.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">Environmental Impact Studies</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
              Before any development occurs, engineers and scientists use terrain simulations to visualize the ecological footprint. This includes analyzing how a proposed structure might alter local wind patterns, sunlight distribution, or natural wildlife corridors.
              </PText>

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





