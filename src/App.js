import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

// import components
import Navbar from './components/Navbar';
import NavigateExample from './pages/NavigateExample';

const App = () => {
  return (

    <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/nav-example" element={<NavigateExample/>} />

        <Route path='*' element={<PageNotFound/>} />
      </Routes>

      Footer
    
    </Router>
  );
}

export default App;
