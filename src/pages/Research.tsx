import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PDivider, PTag, PIcon } from '@porsche-design-system/components-react';

const research = [
  {
    type: 'Ongoing',
    title: 'Autonomous LiDAR-to-CityGML Reconstruction',
    description: 'Investigating deep learning approaches for automated semantic segmentation and reconstruction of urban point clouds into Level-of-Detail 2 CityGML models without manual intervention.',
    topics: ['LiDAR', 'Deep Learning', 'CityGML', 'Semantic Segmentation'],
    status: 'In Progress',
    year: '2024–Present',
  },
  {
    type: 'Technical Note',
    title: 'Accuracy Assessment Framework for UAV Photogrammetry',
    description: 'A systematic methodology for evaluating the positional accuracy of drone-derived digital surface models using independent check points and RMSE analysis across terrain complexity classes.',
    topics: ['UAV', 'Photogrammetry', 'Accuracy', 'QA/QC'],
    status: 'Published',
    year: '2023',
  },
  {
    type: 'Experiment',
    title: 'RTK vs. PPK: Field Accuracy Comparison',
    description: 'Field comparison of Real-Time Kinematic versus Post-Processed Kinematic GNSS methods for ground control point determination in areas with variable cellular network coverage.',
    topics: ['GNSS', 'RTK', 'PPK', 'Geodesy'],
    status: 'Complete',
    year: '2023',
  },
  {
    type: 'Methods Note',
    title: 'Integrating IoT Sensor Streams into CityGML Digital Twins',
    description: 'Documentation of a lightweight ADE (Application Domain Extension) schema for attaching real-time sensor observations to CityGML building and infrastructure objects.',
    topics: ['Digital Twin', 'CityGML', 'IoT', 'ADE'],
    status: 'Draft',
    year: '2024',
  },
  {
    type: 'Exploration',
    title: 'Point Cloud Compression for Web Streaming',
    description: 'Evaluating Potree, Cesium 3D Tiles, and LASzip compression performance for streaming classified urban LiDAR datasets to browser clients at interactive frame rates.',
    topics: ['Point Cloud', 'WebGL', 'Cesium', 'Compression'],
    status: 'In Progress',
    year: '2024',
  },
];

const topics = [
  { icon: 'brain', title: 'Geospatial Machine Learning', desc: 'Applying ML to automate feature extraction from point clouds and satellite imagery.' },
  { icon: 'globe', title: 'Digital Twin Frameworks', desc: 'CityGML, IFC, and Open Geospatial Consortium standards for living models.' },
  { icon: 'compass', title: 'Survey Instrumentation', desc: 'Comparing LiDAR platforms, GNSS receivers, and their error propagation characteristics.' },
  { icon: 'chart', title: 'Spatial Data Science', desc: 'Statistical methods for geospatial analysis, interpolation, and uncertainty quantification.' },
];

export default function Research() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-fluid-2xl">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-static-sm mb-fluid-md">
            <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            <PText size="small" theme="dark" color="contrast-medium">Technical Depth</PText>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Research
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-md max-w-[600px]">
            Technical explorations, methods documentation, and ongoing investigations at the
            frontier of geospatial engineering.
          </PText>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <PHeading size="xx-large" tag="h2" className="mb-fluid-xl">Research Topics</PHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-fluid-md mb-fluid-2xl">
            {topics.map(({ icon, title, desc }) => (
              <div key={title} className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                <PIcon name={icon as Parameters<typeof PIcon>[0]['name']} size="large" color="primary" aria-hidden="true" />
                <PText weight="semi-bold" tag="p" size="medium" className="mt-fluid-sm mb-static-xs">{title}</PText>
                <PText size="small" color="contrast-medium" tag="p">{desc}</PText>
              </div>
            ))}
          </div>

          <PDivider />
        </div>
      </section>

      {/* Research Items */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <PHeading size="xx-large" tag="h2" className="mb-fluid-xl">Publications & Technical Notes</PHeading>
          <div className="flex flex-col gap-fluid-lg">
            {research.map((item) => (
              <article
                key={item.title}
                className="p-fluid-md bg-surface rounded-lg border border-contrast-low"
              >
                <div className="flex items-start justify-between flex-wrap gap-fluid-sm mb-fluid-md">
                  <div className="flex items-center gap-static-sm flex-wrap">
                    <PTag
                      variant={
                        item.status === 'Published' ? 'success' :
                        item.status === 'In Progress' ? 'info' :
                        item.status === 'Complete' ? 'secondary' : 'warning'
                      }
                      compact
                    >
                      {item.status}
                    </PTag>
                    <span
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: '#f2f2f5', color: '#535457' }}
                    >
                      {item.type}
                    </span>
                  </div>
                  <PText size="x-small" color="contrast-medium" tag="span">{item.year}</PText>
                </div>

                <PHeading size="medium" tag="h3" className="mb-fluid-sm">{item.title}</PHeading>
                <PText size="small" color="contrast-medium" tag="p" className="mb-fluid-md">{item.description}</PText>

                <div className="flex flex-wrap gap-static-xs">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: '#f2f2f5', color: '#535457' }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-fluid-2xl" style={{ backgroundColor: '#d5001c' }}>
        <div className="max-w-[1440px] mx-auto px-fluid-md text-center">
          <PHeading size="x-large" tag="h2" theme="dark" align="center" className="mb-fluid-md">
            Interested in collaboration?
          </PHeading>
          <PText size="medium" theme="dark" color="contrast-medium" align="center" tag="p" className="mb-fluid-xl max-w-[600px] mx-auto">
            I'm open to research partnerships, joint technical papers, and applied R&D projects
            in geospatial engineering.
          </PText>
          <Link to="/contact">
            <PButton variant="secondary" theme="dark" icon="email" type="button">Get in Touch</PButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
