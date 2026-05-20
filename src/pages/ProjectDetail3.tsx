import { Link } from 'react-router-dom';
import { PButton, PDisplay, PHeading, PText, PDivider, PTag, PIcon } from '@porsche-design-system/components-react';

export default function ProjectDetail3() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-fluid-2xl min-h-[50vh] flex items-end"
        style={{
          backgroundImage: 'url(/project-cad.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-fluid-md pb-fluid-xl">
          <div className="flex gap-static-sm mb-fluid-md flex-wrap">
            <PTag variant="primary">CAD</PTag>
            <PTag variant="secondary">Survey</PTag>
            <PTag variant="secondary">Automation</PTag>
          </div>
          <PDisplay size={{ base: 'small', l: 'medium' }} theme="dark" tag="h1">
            Survey-to-CAD Pipeline
          </PDisplay>
          <PText size="medium" theme="dark" color="contrast-medium" tag="p" className="mt-fluid-sm max-w-[700px]">
            An automated data pipeline converting raw total station survey observations directly
            into fully annotated, production-ready AutoCAD Civil 3D drawings with 70% time savings.
          </PText>
        </div>
      </section>

      {/* Overview Band */}
      <section style={{ backgroundColor: '#d5001c' }} className="py-fluid-md">
        <div className="max-w-[1440px] mx-auto px-fluid-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-fluid-md">
            {[
              { label: 'Client Type', value: 'Construction Firm' },
              { label: 'Time Saved', value: '70% per project' },
              { label: 'Projects Processed', value: '40+ sites' },
              { label: 'Deliverables', value: 'DWG, PDF, Topo Plans' },
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
                Construction firms were losing 2–3 weeks per project manually converting total station
                field observations into CAD drawings. Survey data arrived as raw XML or CSV exports,
                requiring manual coordinate entry, layer management, annotation, and title block
                population — all error-prone when done by hand under deadline pressure.
              </PText>

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Objective</PHeading>
              <PText size="medium" color="contrast-medium" tag="p" className="mb-fluid-lg">
                Build a fully automated pipeline that ingests raw total station job files and outputs
                standards-compliant AutoCAD DWG files complete with feature coding, annotation layers,
                contour generation, and stamped title blocks — with zero manual CAD intervention for
                standard survey deliverables.
              </PText>

              <PHeading size="x-large" tag="h2" className="mb-fluid-md">Methodology</PHeading>
              <div className="flex flex-col gap-fluid-md mb-fluid-lg">
                {[
                  { n: '1', title: 'Field Code Schema Design', desc: 'Developed a standardised feature coding system for total station observations covering 180+ feature types.' },
                  { n: '2', title: 'Parser Development', desc: 'Built a Python parser for Leica DBX and Trimble JXL formats that extracts coordinates and attributes into a normalised GeoJSON structure.' },
                  { n: '3', title: 'CAD Template Engine', desc: 'Designed parametric AutoCAD templates with locked layer standards, block libraries, and variable title block fields.' },
                  { n: '4', title: 'AutoLISP / Python Automation', desc: 'Wrote AutoLISP routines and pyautocad scripts to drive Civil 3D — inserting points, drawing linework, generating surface models and contours automatically.' },
                  { n: '5', title: 'QA & Output Generation', desc: 'Built automated accuracy checks and generated DWG, PDF plan sheets, and GeoPackage data bundles in a single pipeline run.' },
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
                  { value: '70%', label: 'Drafting time saved' },
                  { value: '40+', label: 'Sites processed to date' },
                  { value: '0', label: 'Manual CAD errors in 6 months' },
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
                Legacy survey instruments used inconsistent field coding conventions. We handled this
                through a configurable code translation table that maps client-specific codes to the
                standardised schema at parse time. Non-standard AutoCAD versions required the pipeline
                to detect the target DWG version and write compatible entity formats via the
                ezdxf library rather than live COM automation.
              </PText>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 flex flex-col gap-fluid-md">
                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Data Inputs</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['Leica Total Station (DBX)', 'Trimble TSC3 (JXL)', 'GNSS RTK observations', 'Existing cadastral data', 'Survey control coordinates'].map((item) => (
                    <div key={item} className="flex items-center gap-static-xs mb-static-sm">
                      <PIcon name="check" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>

                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Software Stack</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['Python 3.11', 'AutoCAD Civil 3D 2024', 'pyautocad / ezdxf', 'QGIS (validation)', 'PostgreSQL / PostGIS', 'Shell scripting'].map((item) => (
                    <div key={item} className="flex items-center gap-static-xs mb-static-sm">
                      <PIcon name="check" size="x-small" color="primary" aria-hidden="true" />
                      <PText size="small" color="contrast-medium" tag="span">{item}</PText>
                    </div>
                  ))}
                </div>

                <div className="p-fluid-md bg-surface rounded-lg border border-contrast-low">
                  <PHeading size="medium" tag="h3" className="mb-fluid-md">Deliverables</PHeading>
                  <PDivider className="mb-fluid-md" />
                  {['AutoCAD DWG drawings', 'Stamped PDF plan sets', 'Contour + surface models', 'GeoPackage spatial data', 'Survey report (Word/PDF)', 'Feature code library'].map((item) => (
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
