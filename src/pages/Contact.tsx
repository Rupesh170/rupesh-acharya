import { useState } from 'react';
import { PDisplay, PHeading, PText, PIcon, PDivider } from '@porsche-design-system/components-react';

const projectTypes = [
  '2D Mapping',
  '3D Digital Replica',
  'Digital Twin',
  'CAD Deliverables',
  'GIS Analysis',
  'Field Survey',
  'Research Collaboration',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a' }} className="py-fluid-2xl">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="flex items-center gap-static-sm mb-fluid-md">
            <div style={{ width: 32, height: 3, backgroundColor: '#d5001c' }} />
            <PText size="small" theme="dark" color="contrast-medium">Let's Connect</PText>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Get in Touch
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-md max-w-[600px]">
            Have a geospatial project, research inquiry, or just want to discuss an idea?
            I typically respond within 24 hours on business days.
          </PText>
        </div>
      </section>

      {/* Content */}
      <section className="py-fluid-2xl bg-canvas">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-fluid-2xl">

            {/* Contact Info */}
            <div>
              <PHeading size="x-large" tag="h2" className="mb-fluid-xl">Contact Details</PHeading>

              <div className="flex flex-col gap-fluid-lg mb-fluid-xl">
                {[
                  { icon: 'email', label: 'Email', value: 'geospatial@example.com', href: 'mailto:geospatial@example.com' },
                  { icon: 'phone', label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
                  { icon: 'logo-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/geoengineer', href: 'https://linkedin.com' },
                  { icon: 'geo-localization', label: 'Location', value: 'Available Worldwide · Remote & On-site', href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-fluid-sm">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#d5001c' }}
                    >
                      <PIcon name={icon as Parameters<typeof PIcon>[0]['name']} size="small" theme="dark" aria-hidden="true" />
                    </div>
                    <div>
                      <PText size="x-small" color="contrast-medium" tag="p">{label}</PText>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-primary no-underline hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <PText size="small" weight="semi-bold" tag="p">{value}</PText>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <PDivider className="mb-fluid-xl" />

              <PHeading size="medium" tag="h3" className="mb-fluid-md">Response Times</PHeading>
              <div className="flex flex-col gap-static-sm">
                {[
                  { type: 'General inquiries', time: 'Within 24 hours' },
                  { type: 'Project scoping', time: '1–2 business days' },
                  { type: 'Urgent/active projects', time: 'Same day' },
                ].map(({ type, time }) => (
                  <div key={type} className="flex justify-between">
                    <PText size="small" color="contrast-medium" tag="span">{type}</PText>
                    <PText size="small" weight="semi-bold" tag="span">{time}</PText>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <PHeading size="x-large" tag="h2" className="mb-fluid-xl">Send a Message</PHeading>

              {submitted ? (
                <div
                  className="p-fluid-xl rounded-lg border text-center"
                  style={{ borderColor: '#18a574', backgroundColor: '#f0faf5' }}
                >
                  <PIcon name="check" size="x-large" color="notification-success" aria-hidden="true" />
                  <PHeading size="large" tag="h3" className="mt-fluid-md mb-fluid-sm">Message Sent!</PHeading>
                  <PText size="medium" color="contrast-medium" tag="p">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </PText>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-fluid-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-md">
                    <div className="flex flex-col gap-static-xs">
                      <label htmlFor="name" className="text-sm font-medium text-primary">
                        Full Name <span style={{ color: '#d5001c' }}>*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="px-3 py-2 rounded border border-contrast-low bg-canvas text-sm focus:outline-none"
                        style={{ borderColor: '#D8D8DB' }}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-static-xs">
                      <label htmlFor="email" className="text-sm font-medium text-primary">
                        Email Address <span style={{ color: '#d5001c' }}>*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-3 py-2 rounded border bg-canvas text-sm focus:outline-none"
                        style={{ borderColor: '#D8D8DB' }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-static-xs">
                    <label htmlFor="projectType" className="text-sm font-medium text-primary">
                      Project Type <span style={{ color: '#d5001c' }}>*</span>
                    </label>
                    <select
                      id="projectType"
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="px-3 py-2 rounded border bg-canvas text-sm focus:outline-none appearance-none"
                      style={{ borderColor: '#D8D8DB' }}
                    >
                      <option value="">Select a project type...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-fluid-md">
                    <div className="flex flex-col gap-static-xs">
                      <label htmlFor="budget" className="text-sm font-medium text-primary">
                        Budget Range <span className="text-xs" style={{ color: '#6B6D70' }}>(optional)</span>
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="px-3 py-2 rounded border bg-canvas text-sm focus:outline-none appearance-none"
                        style={{ borderColor: '#D8D8DB' }}
                      >
                        <option value="">Prefer not to say</option>
                        <option value="<5k">Under $5,000</option>
                        <option value="5-15k">$5,000 – $15,000</option>
                        <option value="15-50k">$15,000 – $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-static-xs">
                      <label htmlFor="timeline" className="text-sm font-medium text-primary">
                        Timeline <span className="text-xs" style={{ color: '#6B6D70' }}>(optional)</span>
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="px-3 py-2 rounded border bg-canvas text-sm focus:outline-none appearance-none"
                        style={{ borderColor: '#D8D8DB' }}
                      >
                        <option value="">Flexible</option>
                        <option value="asap">ASAP</option>
                        <option value="1mo">Within 1 month</option>
                        <option value="3mo">1–3 months</option>
                        <option value="6mo">3–6 months</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-static-xs">
                    <label htmlFor="message" className="text-sm font-medium text-primary">
                      Message <span style={{ color: '#d5001c' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="px-3 py-2 rounded border bg-canvas text-sm focus:outline-none resize-y"
                      style={{ borderColor: '#D8D8DB' }}
                      placeholder="Describe your project, site, accuracy requirements, and any other relevant details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-static-sm px-fluid-md py-static-md rounded font-medium text-white transition-all"
                    style={{ backgroundColor: '#d5001c', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
                  >
                    <PIcon name="email" size="small" theme="dark" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
