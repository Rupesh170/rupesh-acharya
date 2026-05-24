import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail1 from './pages/ProjectDetail1';
import ProjectDetail2 from './pages/ProjectDetail2';
import ProjectDetail4 from './pages/ProjectDetail4';
import ProjectDetail5 from './pages/ProjectDetail5';
import ProjectDetail6 from './pages/ProjectDetail6';
import ProjectDetail7 from './pages/ProjectDetail7';
import ProjectDetail8 from './pages/ProjectDetail8';
import ProjectDetail9 from './pages/ProjectDetail9';
import ProjectDetail10 from './pages/ProjectDetail10';
import ProjectDetail11 from './pages/ProjectDetail11';
import Services from './pages/Services';
import Research from './pages/Research';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/3d-digital-twin" element={<ProjectDetail1 />} />
        <Route path="projects/3d-terrain-modeling" element={<ProjectDetail2 />} />
        <Route path="projects/3d-modeling-mt-anna" element={<ProjectDetail4 />} />
        <Route path="projects/3d-print-city-modeling" element={<ProjectDetail5 />} />
        <Route path="projects/yosemite-landscape-design" element={<ProjectDetail6 />} />
        <Route path="projects/bim-modeling-geospatial" element={<ProjectDetail7 />} />
        <Route path="projects/roadway-design-presentation" element={<ProjectDetail8 />} />
        <Route path="projects/bim-gis-modeling" element={<ProjectDetail9 />} />
        <Route path="projects/architectural-bim-rendering" element={<ProjectDetail10 />} />
        <Route path="projects/3d-gis-modeling" element={<ProjectDetail11 />} />
        <Route path="services" element={<Services />} />
        <Route path="research" element={<Research />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
