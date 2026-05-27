import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const backgroundImages = [
  '/3D_2_1.jpg',
  '/3D_2_2.png'
];

export default function ProjectDetail4() {
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
            <PTag variant="primary">3D Terrain Modeling</PTag>
            <PTag variant="secondary">Mountain Range</PTag>
            <PTag variant="secondary">Hazard Assessment</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            3D Terrain Modeling of Mount Annapurna Range
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px] mx-auto">
            High-fidelity textured 3D terrain model of Mount Annapurna Range featuring Machapuchare with applications in hazard assessment, hydropower engineering, and trekking safety.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Region', value: 'Annapurna Range' },
              { label: 'Feature', value: 'Machapuchare' },
              { label: 'Application', value: 'Hazard Assessment' },
              { label: 'Output', value: 'High-Fidelity Mesh' },
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
              This project showcases a high-fidelity, textured 3D terrain model of the iconic Mount Annapurna Range, featuring a distinct, prominent rendering of Machapuchare (Mt. Fishtail) rising sharply above the lush, green mid-hills. By combining accurate digital elevation datasets with realistic texture mapping, this model bridges the gap between raw spatial data and immersive visual comprehension.
              <br></br><br></br> 
              Beyond its visual appeal as a digital twin of one of the world's most rugged landscapes, 3D Terrain Modeling serves as a foundational tool across numerous engineering, environmental, and commercial sectors.
              </PText>

              <PHeading size="large" tag="h2" className="mb-fluid-sm">Key Applications of 3D Terrain Modeling</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-md">
                {[
                  { n: '1', title: 'Disaster Risk Mitigation & Hazard Assessment', desc: 'High-altitude mountain ecosystems like the Annapurna range are highly susceptible to natural hazards. A precise 3D terrain model allows geologists and disaster management authorities to: (1) Simulate Avalanches and Landslides: Predict potential failure planes, rockfall trajectories, and debris runout zones based on slope steepness and aspect. (2) Model Glacial Lake Outburst Floods (GLOFs): Analyze downstream vulnerability by simulating the breach of high-altitude glacial lakes and identifying safe zones for remote settlements.' },
                  { n: '2', title: 'Hydrological Modeling & Hydropower Engineering', desc: 'Mountainous terrain dictates the flow of vital water resources. Engineers leverage these 3D models for: (1) Catchment & Watershed Analysis: Delineating precise drainage basins, calculating flow accumulation, and estimating snowmelt runoff patterns. (2) Infrastructure Siting: Determining the optimal placement for reservoirs, surge tanks, penstocks, and headworks for run-of-the-river hydropower projects, ensuring maximum head with minimal environmental disruption.' },
                  { n: '3', title: 'Tourism, Navigation, and Trekking Safety', desc: 'The Annapurna region is globally renowned for aviation and trekking. 3D terrain modeling revolutionizes the visitor experience and safety protocols through: (1) Interactive 3D Route Mapping: Replacing flat 2D maps with interactive flyovers of legendary routes (like the Annapurna Circuit), allowing trekkers to visually understand elevation profiles and terrain difficulty before stepping foot on the trail. (2) Flight Simulation & Air Traffic Safety: Providing critical terrain awareness data for search-and-rescue operations, helicopter navigation, and regional flight simulators operating in deep, high-altitude valleys.' },
                  { n: '4', title: 'Infrastructure Corridor Planning & Line-of-Sight Analysis', desc: '(1) Road and Tunnel Alignment: Civil engineers use the model to calculate cut-and-fill volumes, optimize slope stabilization structures, and evaluate the feasibility of mountain tunnels to reduce transit times. (2) Telecom & Telemetry Optimization: Running Line-of-Sight (LoS) analyses to determine the exact placement of communication towers along ridges, ensuring maximum cellular and telemetry coverage across deep valley shadow zones.' },
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
                <Link to="/projects">
                  <PButton variant="secondary" icon="arrow-left" type="button">Back to Projects</PButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





