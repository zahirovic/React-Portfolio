import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from "./components/Project";
import Portfolio from "./components/Portfolio";
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header></Header>
      <Routes>
         <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;