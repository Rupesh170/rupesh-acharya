import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PTag } from '@porsche-design-system/components-react';

const projects = [
  {
    id: '3d-digital-twin',
    title: '3D Digital Twin Terrain App',
    summary: 'Mt Everest as Digital Twin Terrain',
    category: 'Digital Twin',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965750/Photo_1_xb2zkv.png',
    tags: ['Digital Twin'],
  },
  {
    id: '3d-terrain-modeling',
    title: '3D Terrain Simulation of Glen Canyon',
    summary: 'High-resolution 3D terrain flyover simulation of Glen Canyon area with accurate digital elevation data and realistic textures in Unreal Engine.',
    category: '3D Modeling',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779966591/3D_1_1_fasiie.png',
    tags: ['3D Modeling'],
  },
  {
    id: '3d-modeling-mt-anna',
    title: '3D Terrain Modeling of Mount Annapurna Range',
    summary: 'High-fidelity textured 3D terrain model of Mount Annapurna Range featuring Machapuchare with applications in hazard assessment, hydropower engineering, and trekking safety.',
    category: '3D Modeling',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965802/3D_2_1_jwty5l.jpg',
    tags: ['3D Modeling'],
  },
  {
    id: '3d-print-city-modeling',
    title: '3D Print City Modeling',
    summary: '3D Print ready cityscape modeling of San Francisco Bay Area optimized for additive manufacturing and urban planning applications.',
    category: '3D Modeling',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965780/3D_3_1_ozktzs.png',
    tags: ['3D Modeling'],
  },
  {
    id: 'bim-modeling-geospatial',
    title: 'BIM Modeling in Geospatial Context',
    summary: 'Comprehensive BIM modeling and geolocation in a 3D City model - bridging detailed architectural design with macro-scale geographic environments.',
    category: 'BIM',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965779/BIM_1_1_k03bu2.png',
    tags: ['BIM'],
  },
  {
    id: 'roadway-design-presentation',
    title: 'Roadway Design Presentation in a Real Life Location',
    summary: 'Highway interchange engineering concepts fused with real-time geographic data for immersive 3D presentation, transforming BIM models into infrastructure digital twins.',
    category: 'BIM',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965809/BIM_2_1_vvb3qb.png',
    tags: ['BIM'],
  },
  {
    id: 'bim-gis-modeling',
    title: 'BIM + GIS Modeling',
    summary: 'Townhall development concepts utilizing BIM and GIS for contextual modeling - embedding architectural precision within real-world geographic environments.',
    category: 'BIM',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965798/BIM_3_1_sdggv8.png',
    tags: ['BIM'],
  },
  {
    id: 'architectural-bim-rendering',
    title: 'Architectural BIM Rendering',
    summary: 'High-fidelity 3D modeling and rendering of a modern commercial warehouse facility with comprehensive design layout, structural steel framing, and data-driven BIM intelligence.',
    category: 'BIM',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779966590/BIM_4_1_ozeak6.png',
    tags: ['BIM'],
  },
  {
    id: '3d-gis-modeling',
    title: '3D GIS Modeling',
    summary: 'City-scale 3D GIS model showcase featuring a comprehensive 3D city model of Pokhara City for sustainable planning, urban development, and infrastructure analysis.',
    category: 'GIS',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965807/GIS_1_1_cswwgr.jpg',
    tags: ['GIS'],
  },
  {
    id: 'yosemite-landscape-design',
    title: '3D Landscape Design of Yosemite National Park',
    summary: 'LiDAR-based terrain modeling and procedural forest generation showcasing real-world topography integration with Unreal Engine for game development, VFX, and conservation simulation.',
    category: '3D Modeling',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965755/3D_4_1_ljt110.png',
    tags: ['3D Modeling'],
  },
];

const categories = ['All', 'Digital Twin', '3D Modeling', 'BIM', 'GIS'];

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
                        Explore
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
