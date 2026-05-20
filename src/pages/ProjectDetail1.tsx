import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PDivider, PTag, PIcon } from '@porsche-design-system/components-react';

export default function ProjectDetail1() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-fluid-2xl min-h-[50vh] flex items-end"
        style={{
          backgroundImage: 'url(/project-digital-twin.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-fluid-md pb-fluid-xl">
          <div className="flex gap-static-sm mb-fluid-md flex-wrap">
            <PTag variant="primary">Digital Twin</PTag>
            <PTag variant="secondary">LiDAR</PTag>
            <PTag variant="secondary">Smart City</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Urban Digital Twin
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px]">
            A high-fidelity 3D replica of an urban district built from fused LiDAR, drone photogrammetry,
            and cadastral datasets for smart city infrastructure planning.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Location', value: 'Metro District, 12km²' },
              { label: 'Accuracy', value: '±2cm positional' },
              { label: 'Duration', value: '14 weeks' },
              { label: 'Deliverables', value: 'CityGML, IFC, Cesium' },
            ].map(({ label, value }) => (
              <div key={label}>
                <PText size="x-small" theme="dark" color="contrast-medium" tag="p">{label}</PText>
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
            {/* Main content */}
            <div className="lg:col-span-2">
              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Problem Statement</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                City planners needed a navigable, geometrically accurate digital model of a 12km²
                district to evaluate infrastructure upgrade scenarios, model pedestrian flows, and
                simulate emergency response routing. Existing 2D GIS data was fragmented across
                departments and lacked any 3D information.
              </PText>

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Objective</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                Produce a Level of Detail 2 (LoD2) CityGML model with ±2cm positional accuracy,
                integrated utility networks, and a real-time IoT sensor data layer that could be
                hosted in a browser-based Cesium viewer accessible to all departments.
              </PText>

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Methodology</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-lg">
                {[
                  { n: '1', title: 'Ground Control & LiDAR Campaign', desc: 'Deployed 24 GCPs across the district. Ran airborne LiDAR at 200pts/m² density using a Riegl VUX-1UAV.' },
                  { n: '2', title: 'Drone Photogrammetry', desc: 'Flew 6 photogrammetry missions at 60m AGL with 80/80 overlap to capture facade textures and roof geometry.' },
                  { n: '3', title: 'Point Cloud Processing', desc: 'Classified LiDAR returns in LAStools and Leica Cyclone. Fused photogrammetric mesh for facade detail.' },
                  { n: '4', title: 'CityGML Model Assembly', desc: 'Reconstructed building footprints, roof forms, and vegetation using FME and custom Python scripts.' },
                  { n: '5', title: 'Digital Twin Integration', desc: 'Linked IoT sensor feeds (traffic, air quality) to model entities via CityGML ADE extensions.' },
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

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Results & Impact</PHeading>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-fluid-md mb-fluid-lg">
                {[
                  { value: '98.7%', label: 'Geometric accuracy' },
                  { value: '3.2M', label: 'Building objects modeled' },
                  { value: '60%', label: 'Faster planning decisions' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-fluid-md rounded-lg text-center border border-contrast-low bg-surface"
                  >
                    <div className="text-3xl font-bold mb-1" style={{ color: '#d5001c' }}>{value}</div>
                    <PText size="x-small" color="contrast-medium" tag="p">{label}</PText>
                  </div>
                ))}
              </div>

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Challenges & Solutions</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                Dense urban vegetation obscured rooftop and ground-level geometry. We resolved this by
                fusing ground-based mobile LiDAR passes for street-level gaps and applying advanced
                ground filtering algorithms to separate building returns from tree canopy. Cadastral
                misalignment across historic parcel data required a custom transformation pipeline
                to register everything to a unified coordinate reference system.
              </PText>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 flex flex-col gap-fluid-md">
                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Data Inputs</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['Airborne LiDAR (Riegl VUX)', 'Drone RGB Imagery (Phantom 4 RTK)', 'Cadastral Parcel Data', 'OpenStreetMap baseline', 'IoT Sensor Feeds (52 nodes)'].map((item) => (
                    <div key={item} className="flex items-center gap-static-xs mb-static-sm">
                      <PIcon name="check" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>

                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Software Stack</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['Agisoft Metashape', 'LAStools', 'FME Workbench', 'QGIS', 'Python / GDAL', 'CesiumJS', 'AutoCAD Civil 3D'].map((item) => (
                    <div key={item} className="flex items-center gap-static-xs mb-static-sm">
                      <PIcon name="check" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>

                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Deliverables</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['CityGML LoD2 Model', 'IFC Building Models', 'Cesium 3D Tiles', 'Classified Point Cloud', 'Technical Report + Metadata'].map((item) => (
                    <div key={item} className="flex items-center gap-static-xs mb-static-sm">
                      <PIcon name="document" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>

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
