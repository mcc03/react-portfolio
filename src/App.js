import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ProjectsIndex from './pages/projects/Index';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (

    <div className='container mx-auto'>
          
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<ProjectsIndex/>} />

          <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>

    </Router>
    </div>

  );
}

export default App;
