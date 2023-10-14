import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './components/home';
import { Projects } from './components/projects';
import { About } from './components/about';
import { ContactUs } from './components/contactus';


function App() {
  const appStyles = {
    backgroundColor: 'black', // Set the background color to black
    color: 'white', // Set the text color to white
    minHeight: '100vh', // Ensure the page takes up at least the full viewport height
    padding: '20px', // Add some padding to the content
  };

  return (
    <>
    <Router>
      <div style={appStyles}> {/* Apply inline styles to the container div */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
