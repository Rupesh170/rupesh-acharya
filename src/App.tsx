import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail1 from './pages/ProjectDetail1';
import ProjectDetail2 from './pages/ProjectDetail2';
import ProjectDetail3 from './pages/ProjectDetail3';
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
        <Route path="projects/urban-digital-twin" element={<ProjectDetail1 />} />
        <Route path="projects/3d-terrain-modeling" element={<ProjectDetail2 />} />
        <Route path="projects/cad-survey-pipeline" element={<ProjectDetail3 />} />
        <Route path="services" element={<Services />} />
        <Route path="research" element={<Research />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
