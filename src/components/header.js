import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const navStyles = {
    backgroundColor: 'black',
    borderBottom: '2px solid red',
    padding: '10px 0', // Add padding to the top and bottom of the navbar
  };

  const brandStyles = {
    color: 'red',
    fontSize: '24px', // Increase the font size
    fontWeight: 'bold', // Make the text bold
    textDecoration: 'none', // Remove underlines
  };

  const homeLinkStyles = {
    color: 'white', // Change the color to white
    fontWeight: 'bold',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navStyles}>
      <Link to="/" className="navbar-brand" style={brandStyles}>
        JEEVAN
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={homeLinkStyles}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
