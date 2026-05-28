import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PDivider, PIcon } from '@porsche-design-system/components-react';

const skills = [
  { category: 'Surveying & Data Collection', items: ['LiDAR Scanning', 'Drone / UAV Survey', 'Total Station', 'GNSS/GPS', 'Ground Control Points'] },
  { category: 'GIS & Remote Sensing', items: ['ArcGIS Pro', 'QGIS', 'Google Earth Engine', 'Global Mapper Pro', 'ENVI'] },
  { category: 'Digital Twins', items: ['Agisoft Metashape', 'Reality Capture', 'Pix4D', 'Bentley iTwin Capture', 'Unreal Engine'] },
  { category: 'CAD & Engineering', items: ['AutoCAD', 'Civil 3D', 'Revit', 'Infraworks', 'Navisworks'] },
  { category: '3D Modeling and Rendering', items: ['Twinmotion', 'Lumion', 'D5 Render', 'Blender', '3ds Max'] },
];

const workflow = [
  { step: '01', title: 'Field Survey', desc: 'Deploy ground control points, capture LiDAR scans and drone imagery at required accuracy thresholds.' },
  { step: '02', title: 'Data Processing', desc: 'Process raw point clouds, stitch photogrammetric models, and perform quality assurance checks.' },
  { step: '03', title: 'Modeling & Analysis', desc: 'Build 3D surfaces, classify features, extract measurements, and run geospatial analysis.' },
  { step: '04', title: 'Deliverable Production', desc: 'Generate client-ready maps, CAD drawings, Digital Twin assets, or GIS datasets.' },
  { step: '05', title: 'Validation & Handoff', desc: 'Validate accuracy against ground truth, document metadata, and deliver with technical notes.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-fluid-2xl"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/.jpg)' }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-static-sm mb-fluid-md">
            <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            <PText size="small" theme="dark" color="contrast-medium">About Me</PText>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Turning Survey Data<br />into Digital Intelligence
          </PDisplay>
        </div>
      </section>

      {/* Intro */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-2xl items-center">
            <div>
              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Who I Am</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                I'm Rupesh Acharya, a Geospatial Engineer specializing in converting real-world environments into accurate, actionable digital assets. With deep expertise spanning LiDAR, photogrammetry, GIS analysis, BIM Modeling and CAD production, I deliver precision that is never compromised.
              </PText>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                My work sits at the intersection of GIS, 3D Modeling, and Digital Twins. I don't just process the data — I engineer workflows that transform raw measurements into models, maps, designs, and digital twins that last.
              </PText>
              <div className="flex gap-fluid-sm flex-wrap">
                <Link to="/projects">
                  <PButton variant="primary" icon="arrow-right" type="button">See My Work</PButton>
                </Link>
                <Link to="/contact">
                  <PButton variant="secondary" icon="email" type="button">Get in Touch</PButton>
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden" style={{ boxShadow: '0px 8px 40px rgba(0,0,0,0.16)' }}>
              <img
                src="https://res.cloudinary.com/drndctvgz/image/upload/v1779965747/unnamed_jjpaf0.jpg"
                alt="Geospatial engineer in the field"
                className="w-full h-full object-cover"
                style={{ maxHeight: 480 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-fluid-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="max-w-[800px] mx-auto text-center">
            <PHeading size="large" tag="h2" align="center" className="mb-fluid-md">My Mission</PHeading>
            <PText size="large" align="center" tag="p" className="mb-fluid-md" color="contrast-high">
              "Precision is not a nice-to-have in geospatial engineering — it is the entire product."
            </PText>
            <PText size="medium" color="contrast-medium" align="center" tag="p">
              Every project I take on starts with a commitment to millimeter-level accuracy, traceable
              methodology, and deliverables that can be independently verified. Clients shouldn't
              have to trust me blindly — the data should speak for itself.
            </PText>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="text-center mb-fluid-xl">
            <PHeading size="xx-large" tag="h2" align="center">How I Work</PHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-fluid-md">
            {workflow.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-fluid-sm text-white font-bold text-sm"
                  style={{ backgroundColor: '#d5001c' }}
                >
                  {step}
                </div>
                <PText weight="semi-bold" tag="p" size="small" className="mb-static-xs">{title}</PText>
                <PText size="x-small" color="contrast-medium" tag="p">{desc}</PText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-fluid-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <PHeading size="xx-large" tag="h2" className="mb-fluid-xl">Tools & Technologies</PHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
            {skills.map(({ category, items }) => (
              <div key={category} className="p-fluid-md bg-canvas rounded-lg border border-contrast-low">
                <PText weight="semi-bold" tag="p" size="medium" className="mb-fluid-sm">{category}</PText>
                <PDivider className="mb-fluid-sm" />
                <div className="flex flex-col gap-static-xs">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-static-xs">
                      <PIcon name="check" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-fluid-2xl" style={{ backgroundColor: '#d5001c' }}>
        <div className="max-w-[1440px] mx-auto px-fluid-md text-center">
          <PHeading size="xx-large" tag="h2" theme="dark" align="center" className="mb-fluid-md">
            Ready to work together?
          </PHeading>
          <Link to="/contact">
            <PButton variant="secondary" theme="dark" icon="email" type="button">Message Me</PButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
