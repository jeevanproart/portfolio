import React from 'react';
import proj1 from '../images/word.png'; // Import the 'word.png' image
import proj2 from '../images/calculator.png';
import proj3 from '../images/picker.png';
import proj4 from '../images/age.png';
import proj5 from '../images/dummy.png';

export const Projects = () => {
  const projects = [
    {
      title: 'React Word Counter',
      description: 'A simple React application that counts the number of words in a given text. It helps users track their writing progress.',
      imageUrl: proj1,
      link: 'https://word-counter-liart.vercel.app/ ',
    },
    {
      title: 'Calculator App',
      description: 'A React calculator app that can perform basic mathematical operations. It\'s a handy tool for quick calculations.',
      imageUrl: proj2,
      link: 'https://calculator-six-lime.vercel.app/ ',
    },
    {
      title: 'Color Picker',
      description: 'Each color in the list should be displayed as a square with the color as the background color. When a color is clicked, the button should update with the selected color.',
      imageUrl: proj3,
      link: 'https://color-picker-murex.vercel.app/',
    },
    {
      title: 'Age Calculator',
      description: 'By entering the date of your birth, we will calculate your age in years.',
      imageUrl: proj4,
      link: 'https://age-count.vercel.app/ ',
    },
    {
      title: 'Getting Data from API',
      description: 'Fetch the records from https://dummyjson.com/users and display the content in a table on the client side.',
      imageUrl: proj5,
      link: 'https://dummy-data-beige.vercel.app/ ',
    },
  ];

  const cardStyles = {
    backgroundColor: 'black', // Set the background color of the cards to black
    color: 'white', // Set the text color of the cards to white
  };

  return (
    <div className="container mt-5">
      <h1>My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4" style={cardStyles}>
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
