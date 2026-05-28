import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PButton,
  PDisplay,
  PHeading,
  PText,
  PTag,
  PIcon,
} from '@porsche-design-system/components-react';

const videoPosters = [
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965750/Photo_1_xb2zkv.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965748/Photo_2_kn0bhf.png',
  'https://res.cloudinary.com/drndctvgz/image/upload/v1779965748/Photo_3_recsht.png',
];

const featuredProjects = [
  {
    id: '3d-digital-twin',
    title: '3D Digital Twin Terrain App',
    description: 'Mt Everest as Digital Twin Terrain.',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965750/Photo_1_xb2zkv.png',
    tag: 'Digital Twin',
  },
  {
    id: '3d-terrain-modeling',
    title: '3D Terrain Modeling',
    description: 'High-resolution 3D terrain flyover simulation of Glen Canyon area with accurate digital elevation data and realistic textures in Unreal Engine.',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779966591/3D_1_1_fasiie.png',
    tag: '3D Modeling',
  },
  {
    id: 'bim-modeling-geospatial',
    title: 'BIM Modeling in Geospatial Context',
    description: 'Comprehensive BIM modeling and geolocation in a 3D City model - bridging detailed architectural design with macro-scale geographic environments.',
    image: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965779/BIM_1_1_k03bu2.png',
    tag: 'BIM',
  }
];

const services = [
  { icon: 'ai-3d-object', title: 'Geospatial 3D Modeling', desc: 'Photorealistic 3D models from LiDAR, drone photogrammetry, and geospatial data' },
  { icon: 'globe', title: 'Digital Twin Creation', desc: 'Real-time linked 3D models connected to GIS database and operational systems' },
  { icon: 'document', title: 'CAD Deliverables', desc: 'Production-quality AutoCAD and Civil 3D drawings from survey data' },
  { icon: 'chart', title: 'High Resolution Satellite Imagery Service', desc: 'Order high resolution satellite imagery for your projects and research needs.' },
];

const videos = [
  { id: 0, title: 'Geospatial 3D Modeling Sample 1', src: 'https://res.cloudinary.com/drndctvgz/video/upload/v1779965142/3D_1_mtu2gw.mp4', poster: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779966591/3D_1_1_fasiie.png' },
  { id: 1, title: 'Geospatial 3D Modeling Sample 2', src: 'https://res.cloudinary.com/drndctvgz/video/upload/v1779965112/3D_2_ipkmeu.mp4', poster: 'https://res.cloudinary.com/drndctvgz/image/upload/v1779965755/3D_4_1_ljt110.png' },
];

const stats = [
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Tools Mastered' },
];

export default function Home() {
  const [currentPoster, setCurrentPoster] = useState(0);
  const [fadingIn, setFadingIn] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadingIn(false);
      setTimeout(() => {
        setCurrentPoster((prev) => (prev + 1) % videoPosters.length);
        setFadingIn(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Background image cycling */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${videoPosters[currentPoster]})`,
            opacity: fadingIn ? 0.35 : 0,
          }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
          }}
        />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1440px] mx-auto w-full px-fluid-md py-fluid-2xl">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-static-sm mb-fluid-md">
              <div style={{ width: 40, height: 3, backgroundColor: '#d5001c' }} />
              <PText size="small" theme="dark" color="contrast-medium">Precision Mapping & 3D Modeling</PText>
            </div>

            <PDisplay
              size={{ base: 'small', m: 'medium' }}
              theme="dark"
              tag="h1"
              align="start"
            >
              Bringing the Physical World into the Digital Landscape with Geospatial Precision
            </PDisplay>

            <PText
              size={{ base: 'small', m: 'medium' }}
              theme="dark"
              color="contrast-medium"
              tag="p"
              className="mt-fluid-md max-w-[600px]"
            >
              I create highly accurate 2D maps, 3D models, Digital Twins, BIM and CAD outputs
              for real-world environments where precision matters.
            </PText>

            <div className="flex flex-wrap gap-fluid-sm mt-fluid-xl">
              <Link to="/contact">
                <PButton variant="primary" icon="email" type="button">Message Me</PButton>
              </Link>
              <Link to="/projects">
                <PButton variant="secondary" theme="dark" icon="arrow-right" type="button">View Projects</PButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Video carousel dots */}
        <div className="relative z-10 flex justify-center gap-static-sm pb-fluid-lg">
          {videoPosters.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPoster(i)}
              className="transition-all duration-300"
              style={{
                width: i === currentPoster ? 32 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: i === currentPoster ? '#d5001c' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label={`Show scene ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-lg">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-lg">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{value}</div>
                <PText size="x-small" color="inherit" theme="dark" align="center"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >{label}</PText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHORT NAV ROW */}
      <section className="py-fluid-md bg-surface border-b border-contrast-low">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <nav className="flex flex-wrap justify-center gap-fluid-md">
            {['About', 'Projects', 'Services', 'Research', 'Blogs', 'Gallery', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="flex items-center gap-static-xs text-sm font-medium text-contrast-medium hover:text-primary no-underline transition-colors"
              >
                <PIcon name="arrow-right" size="x-small" color="inherit" aria-hidden="true" />
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="max-w-[800px] mx-auto text-center">
            <PHeading size="x-large" tag="h2" align="center">
              Converting Real-World Environments into Accurate Digital Assets
            </PHeading>
            <PText size="medium" color="contrast-medium" align="center" tag="p" className="mt-fluid-md">
              From LiDAR point clouds to production-ready CAD drawings, I bridge the gap between
              the physical landscape and the digital tools that engineers, planners, and developers rely on.
              Every deliverable is built on field-verified data and calibrated workflows.
            </PText>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-fluid-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex justify-between items-end mb-fluid-xl flex-wrap gap-fluid-sm">
            <div>
              <div className="flex items-center gap-static-sm mb-fluid-sm">
                <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
                <PText size="small" color="contrast-medium">Selected Work</PText>
              </div>
              <PHeading size="xx-large" tag="h2">Featured Projects</PHeading>
            </div>
            <Link to="/projects">
              <PButton variant="secondary" icon="arrow-right" type="button">All Projects</PButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-lg">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-canvas rounded-lg overflow-hidden flex flex-col"
                style={{ boxShadow: '0px 4px 16px rgba(0,0,0,0.1)' }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-static-sm left-static-sm">
                    <PTag variant="primary" compact>{project.tag}</PTag>
                  </div>
                </div>
                <div className="p-fluid-md flex flex-col flex-1">
                  <PHeading size="medium" tag="h3" className="mb-fluid-xs">{project.title}</PHeading>
                  <PText size="small" color="contrast-medium" tag="p" className="mb-fluid-sm flex-1">
                    {project.description}
                  </PText>
                  <Link to={`/projects/${project.id}`}>
                    <PButton variant="secondary" icon="arrow-right" compact type="button">
                     Explore
                    </PButton>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="text-center mb-fluid-xl">
            <div className="flex items-center justify-center gap-static-sm mb-fluid-sm">
              <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
              <PText size="small" color="contrast-medium">What I Offer</PText>
              <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            </div>
            <PHeading size="xx-large" tag="h2" align="center">Core Services</PHeading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-fluid-md">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-fluid-md rounded-lg border border-contrast-low bg-surface hover:border-[#d5001c] transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-fluid-sm"
                  style={{ backgroundColor: '#d5001c' }}
                >
                  <PIcon name={icon as Parameters<typeof PIcon>[0]['name']} size="medium" theme="dark" aria-hidden="true" />
                </div>
                <PText weight="semi-bold" tag="p" size="medium" className="mb-static-xs">{title}</PText>
                <PText size="small" color="contrast-medium" tag="p">{desc}</PText>
              </div>
            ))}
          </div>

          <div className="text-center mt-fluid-xl">
            <Link to="/services">
              <PButton variant="primary" icon="arrow-right" type="button">View All Services</PButton>
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="py-fluid-2xl bg-surface">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="text-center mb-fluid-xl">
            <PHeading size="xx-large" tag="h2" align="center">Work in Motion</PHeading>
            <PText size="medium" color="contrast-medium" align="center" tag="p" className="mt-fluid-sm">
              Visualizing the pipeline from raw survey data to finished deliverables.
            </PText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-md">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '16/9', boxShadow: '0px 8px 40px rgba(0,0,0,0.16)' }}
              >
                {playingVideo === video.id ? (
                  <video
                    src={video.src}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  <>
                    <img
                      src={video.poster}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <button
                      onClick={() => setPlayingVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ background: 'rgba(0,0,0,0.3)' }}
                      aria-label={`Play ${video.title}`}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#d5001c' }}
                      >
                        <PIcon name="play" size="large" theme="dark" aria-hidden="true" />
                      </div>
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-fluid-xl">
            <Link to="/gallery">
              <PButton variant="secondary" icon="arrow-right" type="button">View Full Gallery</PButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-fluid-2xl"
        style={{ backgroundColor: '#0a0a0a', backgroundImage: `url(/hero-geospatial.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div
          className="py-fluid-xl"
          style={{ background: 'rgba(0,0,0,0.75)' }}
        >
          <div className="max-w-[1440px] mx-auto px-fluid-md text-center">
            <PHeading size="xx-large" tag="h2" theme="dark" align="center">
              Let's Get in Touch
            </PHeading>
            <PText
              size="medium"
              theme="dark"
              color="contrast-medium"
              align="center"
              tag="p"
              className="mt-fluid-md max-w-[600px] mx-auto"
            >
              Have a mapping, modeling, or geospatial project in mind? I'd love to hear about it.
              Let's discuss how precision data can solve your real-world challenges.
            </PText>
            <div className="flex justify-center flex-wrap gap-fluid-sm mt-fluid-xl">
              <Link to="/contact">
                <PButton variant="primary" icon="email" type="button">Message Me</PButton>
              </Link>
              <Link to="/projects">
                <PButton variant="secondary" theme="dark" icon="arrow-right" type="button">View Projects</PButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
