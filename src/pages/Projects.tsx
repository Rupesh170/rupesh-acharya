import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const projects = [
  {
    id: 'urban-digital-twin',
    title: 'Urban Digital Twin',
    summary: 'High-fidelity 3D replica of a city district for smart city planning.',
    category: 'Digital Twin',
    image: '/project-digital-twin.webp',
    outcome: '98.7% geometric accuracy vs. ground truth',
    tags: ['Digital Twin', '3D Modeling', 'LiDAR'],
  },
  {
    id: '3d-terrain-modeling',
    title: '3D Terrain Modeling',
    summary: 'Centimeter-accurate terrain model from multi-flight drone survey over 200ha.',
    category: '3D Modeling',
    image: '/project-terrain.webp',
    outcome: '±2cm vertical accuracy across 200 hectares',
    tags: ['3D Modeling', 'Drone Survey', 'DEM'],
  },
  {
    id: 'cad-survey-pipeline',
    title: 'Survey-to-CAD Pipeline',
    summary: 'Automated pipeline converting total station data into production CAD drawings.',
    category: 'CAD',
    image: '/project-cad.webp',
    outcome: '70% reduction in manual drafting time',
    tags: ['CAD', 'Survey', 'Automation'],
  },
];

const categories = ['All', 'Digital Twin', '3D Modeling', 'CAD', 'Mapping', 'GIS'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-fluid-2xl">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-static-sm mb-fluid-md">
            <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            <PText size="small" theme="dark" color="contrast-medium">Portfolio</PText>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Projects
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-md max-w-[600px]">
            A collection of geospatial engineering work spanning digital twins, terrain modeling,
            mapping campaigns, and automated CAD pipelines.
          </PText>
        </div>
      </section>

      {/* Filters */}
      <section className="py-fluid-md bg-surface border-b border-contrast-low">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex flex-wrap gap-static-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-3 py-1 rounded text-sm font-medium transition-all border"
                style={{
                  backgroundColor: activeFilter === cat ? '#d5001c' : 'transparent',
                  color: activeFilter === cat ? 'white' : '#535457',
                  borderColor: activeFilter === cat ? '#d5001c' : '#D8D8DB',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          {filtered.length === 0 ? (
            <div className="text-center py-fluid-2xl">
              <PText size="medium" color="contrast-medium">No projects in this category yet.</PText>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
              {filtered.map((project) => (
                <article
                  key={project.id}
                  className="bg-canvas rounded-lg overflow-hidden flex flex-col border border-contrast-low hover:border-[#d5001c] transition-colors"
                  style={{ boxShadow: '0px 4px 16px rgba(0,0,0,0.08)' }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-static-sm left-static-sm">
                      <PTag variant="primary" compact>{project.category}</PTag>
                    </div>
                  </div>
                  <div className="p-fluid-md flex flex-col flex-1">
                    <PHeading size="medium" tag="h2" className="mb-fluid-xs">{project.title}</PHeading>
                    <PText size="small" color="contrast-medium" tag="p" className="mb-fluid-sm flex-1">
                      {project.summary}
                    </PText>
                    <div
                      className="flex items-center gap-static-xs p-static-sm rounded mb-fluid-md"
                      style={{ backgroundColor: '#f2f2f5' }}
                    >
                      <span style={{ color: '#d5001c', fontWeight: 600, fontSize: '0.75rem' }}>OUTCOME</span>
                      <PText size="x-small" color="contrast-high" tag="span">{project.outcome}</PText>
                    </div>
                    <div className="flex flex-wrap gap-static-xs mb-fluid-md">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: '#f2f2f5', color: '#535457' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={`/projects/${project.id}`}>
                      <PButton variant="secondary" icon="arrow-right" compact type="button">
                        View Case Study
                      </PButton>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-fluid-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto px-fluid-md text-center">
          <PHeading size="large" tag="h2" align="center" className="mb-fluid-md">
            Have a project in mind?
          </PHeading>
          <Link to="/contact">
            <PButton variant="primary" icon="email" type="button">Start a Conversation</PButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
