import { useState } from 'react';
import { PDisplay, PText, PIcon } from '@porsche-design-system/components-react';

const galleryItems = [
  { id: 1, src: '/project-digital-twin.webp', title: 'Urban Digital Twin Model', category: 'Digital Twin', size: 'large' },
  { id: 2, src: '/project-terrain.webp', title: '3D Terrain — 200ha Mine Site', category: '3D Model', size: 'small' },
  { id: 3, src: '/project-cad.webp', title: 'Survey-to-CAD Blueprint', category: 'CAD', size: 'small' },
  { id: 4, src: '/gallery-comparison.webp', title: 'Reality vs. Digital Twin', category: 'Digital Twin', size: 'large' },
  { id: 5, src: '/gallery-lidar.webp', title: 'LiDAR Point Cloud — Forest Survey', category: 'LiDAR', size: 'large' },
  { id: 6, src: '/gallery-map.webp', title: 'Topographic Map — Highland Region', category: 'Mapping', size: 'small' },
  { id: 7, src: '/about-engineer.webp', title: 'Total Station Field Survey', category: 'Field Work', size: 'small' },
  { id: 8, src: '/hero-geospatial.webp', title: 'LiDAR + Aerial Composite', category: 'LiDAR', size: 'large' },
];

const filters = ['All', 'Digital Twin', '3D Model', 'CAD', 'LiDAR', 'Mapping', 'Field Work'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-fluid-2xl">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-static-sm mb-fluid-md">
            <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            <PText size="small" theme="dark" color="contrast-medium">Visual Portfolio</PText>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Gallery
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-md max-w-[600px]">
            Project renders, point cloud visualizations, terrain models, CAD samples, and field work
            captured across 50+ geospatial engineering engagements.
          </PText>
        </div>
      </section>

      {/* Filters */}
      <section className="py-fluid-md bg-surface border-b border-contrast-low">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex flex-wrap gap-static-sm">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-3 py-1 rounded text-sm font-medium transition-all border"
                style={{
                  backgroundColor: activeFilter === f ? '#d5001c' : 'transparent',
                  color: activeFilter === f ? 'white' : '#535457',
                  borderColor: activeFilter === f ? '#d5001c' : '#D8D8DB',
                  cursor: 'pointer',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-fluid-md space-y-fluid-md">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid rounded-lg overflow-hidden relative group cursor-pointer border border-contrast-low"
                style={{ boxShadow: '0px 4px 16px rgba(0,0,0,0.08)' }}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  style={{ display: 'block' }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-fluid-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
                >
                  <PText size="small" theme="dark" weight="semi-bold" tag="p">{item.title}</PText>
                  <span
                    className="text-xs px-2 py-1 rounded self-start mt-static-xs"
                    style={{ backgroundColor: '#d5001c', color: 'white' }}
                  >
                    {item.category}
                  </span>
                </div>
                <div
                  className="absolute top-static-sm right-static-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                  >
                    <PIcon name="increase" size="x-small" theme="dark" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-fluid-2xl">
              <PText size="medium" color="contrast-medium">No items in this category.</PText>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-fluid-md"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-lg overflow-hidden"
            style={{ boxShadow: '0px 8px 40px rgba(0,0,0,0.5)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full object-cover"
              style={{ maxHeight: '80vh' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-fluid-md"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}
            >
              <PText size="medium" theme="dark" weight="semi-bold" tag="p">{lightbox.title}</PText>
              <PText size="small" theme="dark" color="contrast-medium" tag="p">{lightbox.category}</PText>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-static-sm right-static-sm w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)', border: 'none', cursor: 'pointer' }}
              aria-label="Close"
            >
              <PIcon name="close" size="small" theme="dark" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
