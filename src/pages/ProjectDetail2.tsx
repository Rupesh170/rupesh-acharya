import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PDivider, PTag, PIcon } from '@porsche-design-system/components-react';

export default function ProjectDetail2() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-fluid-2xl min-h-[50vh] flex items-end"
        style={{
          backgroundImage: 'url(/project-terrain.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-fluid-md pb-fluid-xl">
          <div className="flex gap-static-sm mb-fluid-md flex-wrap">
            <PTag variant="primary">3D Modeling</PTag>
            <PTag variant="secondary">Drone Survey</PTag>
            <PTag variant="secondary">Mining</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            3D Terrain Modeling
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px]">
            Multi-flight drone photogrammetry campaign producing centimeter-accurate terrain models
            and volumetric calculations for a 200-hectare mining operation.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Area', value: '200 hectares' },
              { label: 'Accuracy', value: '±2cm vertical' },
              { label: 'Flights', value: '18 drone missions' },
              { label: 'Deliverables', value: 'DEM, DSM, Volumes' },
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
            <div className="lg:col-span-2">
              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Problem Statement</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                A mining company required monthly stockpile volume calculations and a detailed
                terrain baseline for blast planning across a 200-hectare open-cut site. Traditional
                ground-based survey methods required 3–4 field teams over 5 days per survey cycle
                and could not safely access all areas of the active workings.
              </PText>

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Objective</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                Design a repeatable drone survey workflow that could deliver ±2cm vertical accuracy
                terrain models and ±0.5% volumetric accuracy within a 2-day turnaround, requiring
                only one operator per cycle.
              </PText>

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Methodology</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-lg">
                {[
                  { n: '1', title: 'Survey Network & GCPs', desc: 'Established 32 RTK-surveyed ground control points distributed across the site with sub-centimeter precision.' },
                  { n: '2', title: 'Drone Flight Planning', desc: 'Designed 18 overlapping flight corridors at 80m AGL with 85/75 overlap to ensure full coverage including high walls.' },
                  { n: '3', title: 'Photogrammetric Processing', desc: 'Processed 12,400 images in Agisoft Metashape Professional to produce a 2cm/pixel orthoimage and 0.04m point cloud.' },
                  { n: '4', title: 'Surface Model Generation', desc: 'Generated DTM, DSM, and volumetric difference surfaces between survey epochs.' },
                  { n: '5', title: 'Reporting & Delivery', desc: 'Automated report generation including stockpile inventories, cut/fill volumes, and change detection maps.' },
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
                  { value: '±1.8cm', label: 'Achieved vertical RMSE' },
                  { value: '80%', label: 'Survey time reduction' },
                  { value: '±0.3%', label: 'Volume calculation error' },
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
                Extreme vertical relief on pit walls (up to 80m) created shadow zones that standard
                nadir flights couldn't capture. We added oblique flight lines at 45° to capture
                vertical faces. Dynamic dust from active blasting required rescheduling missions to
                post-blast settling windows. All data was processed with Adaptive Ground Filtering
                to separate stockpile surfaces from scatter debris.
              </PText>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 flex flex-col gap-fluid-md">
                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Data Inputs</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['DJI Phantom 4 RTK', 'Leica GS18 GNSS (GCPs)', '12,400 nadir + oblique images', 'Previous terrain baselines', 'Mine survey control network'].map((item) => (
                    <div key={item} className="flex items-center gap-static-xs mb-static-sm">
                      <PIcon name="check" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>

                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Software Stack</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['Agisoft Metashape Pro', 'QGIS', 'ArcGIS Pro', 'CloudCompare', 'Python (numpy, laspy)', 'AutoCAD Civil 3D'].map((item) => (
                    <div key={item} className="flex items-center gap-static-xs mb-static-sm">
                      <PIcon name="check" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>

                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Deliverables</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['Digital Terrain Model (DTM)', 'Digital Surface Model (DSM)', '2cm/px Orthophoto Mosaic', 'Stockpile Volume Report', 'Change Detection Map', 'Classified LAS Point Cloud'].map((item) => (
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
