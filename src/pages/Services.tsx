import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PDivider, PIcon } from '@porsche-design-system/components-react';

const services = [
  {
    icon: 'map',
    title: '2D Mapping',
    description: 'High-accuracy topographic maps, planimetric plans, and cadastral surveys for engineering, planning, and land management.',
    clients: 'Municipalities, civil engineers, land developers, surveyors',
    deliverables: ['Topographic maps (1:500 to 1:10,000)', 'Planimetric feature layers', 'Contour plans', 'GIS-ready datasets', 'PDF and DWG plans'],
  },
  {
    icon: 'ai-3d-object',
    title: '3D Digital Replicas',
    description: 'Photorealistic and geometrically accurate 3D models produced from LiDAR scanning, drone photogrammetry, or structured-light scanning.',
    clients: 'Architects, BIM teams, heritage preservation, infrastructure managers',
    deliverables: ['Textured mesh models', 'Point cloud (LAS/LAZ)', 'Surface models (DTM/DSM)', 'LoD1–LoD3 building models', 'OBJ, FBX, IFC formats'],
  },
  {
    icon: 'globe',
    title: 'Digital Twin Creation',
    description: 'End-to-end creation of living Digital Twins — 3D geometric models linked to real-time sensor data and operational systems.',
    clients: 'Smart cities, infrastructure operators, facility managers, utilities',
    deliverables: ['CityGML / IFC models', 'Cesium 3D Tiles', 'IoT sensor integration', 'Twin management dashboard', 'API data connectors'],
  },
  {
    icon: 'document',
    title: 'CAD Deliverables',
    description: 'Production-quality AutoCAD and Civil 3D drawings from survey data, including automated pipelines for high-volume projects.',
    clients: 'Construction firms, civil engineers, road designers, drainage engineers',
    deliverables: ['AutoCAD DWG drawings', 'Civil 3D surface models', 'PDF plan sets', 'Feature coding libraries', 'Automated QA reports'],
  },
  {
    icon: 'chart',
    title: 'GIS Analysis',
    description: 'Spatial analysis, suitability modelling, network analysis, and custom GIS workflows using ArcGIS Pro and QGIS.',
    clients: 'Environmental consultants, urban planners, utilities, logistics',
    deliverables: ['Analysis maps and reports', 'Geodatabase design', 'Spatial model documentation', 'Interactive web maps', 'Automation scripts'],
  },
  {
    icon: 'compass',
    title: 'Field Survey Services',
    description: 'Ground control surveying, site traverses, detail surveys, and GNSS campaigns supporting larger photogrammetric or modeling projects.',
    clients: 'Drone operators, remote sensing teams, engineering firms',
    deliverables: ['GCP coordinate files', 'GNSS observation reports', 'Control network adjustment reports', 'Traverse files', 'Accuracy certificates'],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-fluid-2xl">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-static-sm mb-fluid-md">
            <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            <PText size="small" theme="dark" color="contrast-medium">What I Offer</PText>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Services
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-md max-w-[600px]">
            From raw field data to finished deliverables — every service is built around accuracy,
            traceability, and practical utility for engineering and planning teams.
          </PText>
        </div>
      </section>

      {/* Process note */}
      <section className="py-fluid-lg" style={{ backgroundColor: '#d5001c' }}>
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-fluid-md flex-wrap">
            <PIcon name="information" size="medium" theme="dark" aria-hidden="true" />
            <PText size="medium" theme="dark" weight="semi-bold">
              Message before ordering to discuss your project scope, timeline, and accuracy requirements.
            </PText>
            <Link to="/contact" className="ml-auto">
              <PButton variant="secondary" theme="dark" compact icon="email" type="button">Message Me</PButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex flex-col gap-fluid-2xl">
            {services.map(({ icon, title, description, clients, deliverables }, idx) => (
              <article key={title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-xl items-start">
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-fluid-sm mb-fluid-md">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#d5001c' }}
                      >
                        <PIcon name={icon as Parameters<typeof PIcon>[0]['name']} size="large" theme="dark" aria-hidden="true" />
                      </div>
                      <PHeading size="x-large" tag="h2">{title}</PHeading>
                    </div>
                    <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-md">
                      {description}
                    </PText>
                    <PText size="small" weight="semi-bold" tag="p" className="mb-static-xs">Who needs this:</PText>
                    <PText size="small" color="contrast-medium" tag="p" className="mb-fluid-md">{clients}</PText>
                    <Link to="/contact">
                      <PButton variant="primary" icon="email" compact type="button">Request this service</PButton>
                    </Link>
                  </div>

                  <div className={`p-fluid-md bg-surface rounded-lg border border-contrast-low ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <PText weight="semi-bold" tag="p" size="medium" className="mb-fluid-md">Deliverables Included</PText>
                    <PDivider className="mb-fluid-md" />
                    <div className="flex flex-col gap-static-sm">
                      {deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-static-xs">
                          <div
                            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: '#d5001c' }}
                          >
                            <PIcon name="check" size="x-small" theme="dark" aria-hidden="true" />
                          </div>
                          <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {idx < services.length - 1 && <PDivider className="mt-fluid-2xl" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-fluid-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto px-fluid-md text-center">
          <PHeading size="x-large" tag="h2" align="center" className="mb-fluid-md">Not sure which service fits your project?</PHeading>
          <PText size="medium" color="contrast-medium" align="center" tag="p" className="mb-fluid-xl max-w-[600px] mx-auto">
            Describe your challenge and I'll recommend the right approach — no commitment required.
          </PText>
          <Link to="/contact">
            <PButton variant="primary" icon="email" type="button">Start a Conversation</PButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
