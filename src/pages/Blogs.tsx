import { PDisplay, PText} from '@porsche-design-system/components-react';

{/* const posts = [
  {
    id: 1,
    title: 'From LiDAR to CityGML: A Step-by-Step Workflow',
    summary: 'A detailed walkthrough of the complete pipeline from raw airborne LiDAR acquisition through point cloud classification to a standards-compliant CityGML building model.',
    category: 'Workflows',
    readTime: '12 min read',
    date: 'March 14, 2024',
    image: '/project-digital-twin.webp',
  },
  {
    id: 2,
    title: 'Understanding Digital Twin Accuracy: What the Numbers Actually Mean',
    summary: 'A demystification of accuracy metrics in geospatial deliverables — RMSE, CE90, LE90, and why the difference matters for your engineering decisions.',
    category: 'Digital Twins',
    readTime: '8 min read',
    date: 'February 22, 2024',
    image: '/gallery-comparison.webp',
  },
]; */}

const categories = ['All'];

export default function Blogs() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-fluid-2xl">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-static-sm mb-fluid-md">
            <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            <PText size="small" theme="dark" color="contrast-medium">Knowledge Base</PText>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Blog
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-md max-w-[600px]">
            Technical articles on geospatial workflows, mapping accuracy, digital twins, and
            field-to-digital pipelines — written for engineers who want the practical details.
          </PText>
        </div>
      </section>

      {/* Categories */}
      <section className="py-fluid-md bg-surface border-b border-contrast-low">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex flex-wrap gap-static-sm">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded text-sm cursor-pointer transition-colors border"
                style={{
                  backgroundColor: cat === 'All' ? '#d5001c' : 'transparent',
                  color: cat === 'All' ? 'white' : '#535457',
                  borderColor: cat === 'All' ? '#d5001c' : '#D8D8DB',
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {/*
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <article
            className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-xl rounded-lg overflow-hidden border border-contrast-low"
            style={{ boxShadow: '0px 4px 16px rgba(0,0,0,0.08)' }}
          >
            <div className="relative overflow-hidden" style={{ minHeight: 320 }}>
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
              />
              <div className="absolute top-static-md left-static-md">
                <PTag variant="primary">{posts[0].category}</PTag>
              </div>
            </div>
            <div className="p-fluid-xl flex flex-col justify-center">
              <div className="flex items-center gap-fluid-sm mb-fluid-sm">
                <PText size="x-small" color="contrast-medium" tag="span">{posts[0].date}</PText>
                <PDivider direction="vertical" />
                <PText size="x-small" color="contrast-medium" tag="span">{posts[0].readTime}</PText>
              </div>
              <PHeading size="x-large" tag="h2" className="mb-fluid-md">{posts[0].title}</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">{posts[0].summary}</PText>
              <button
                className="flex items-center gap-static-xs text-sm font-medium transition-colors"
                style={{ color: '#d5001c', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Read Article →
              </button>
            </div>
          </article>
        </div>
      </section>
      */}

      {/* Posts Grid */}
      {/* 
      <section className="pb-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-canvas rounded-lg overflow-hidden border border-contrast-low flex flex-col cursor-pointer hover:border-[#d5001c] transition-colors"
                style={{ boxShadow: '0px 4px 16px rgba(0,0,0,0.08)' }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-static-sm left-static-sm">
                    <PTag compact
                      variant={
                        post.category === 'Digital Twins' ? 'info' :
                        post.category === 'Mapping Accuracy' ? 'success' :
                        post.category === 'Workflows' ? 'primary' : 'secondary'
                      }
                    >{post.category}</PTag>
                  </div>
                </div>
                <div className="p-fluid-md flex flex-col flex-1">
                  <div className="flex items-center gap-fluid-sm mb-fluid-sm">
                    <PText size="x-small" color="contrast-medium" tag="span">{post.date}</PText>
                    <PText size="x-small" color="contrast-low" tag="span">·</PText>
                    <PText size="x-small" color="contrast-medium" tag="span">{post.readTime}</PText>
                  </div>
                  <PHeading size="medium" tag="h2" className="mb-fluid-sm">{post.title}</PHeading>
                  <PText size="small" color="contrast-medium" tag="p" className="flex-1 mb-fluid-md">{post.summary}</PText>
                  <button
                    className="flex items-center gap-static-xs text-sm font-medium self-start"
                    style={{ color: '#d5001c', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
