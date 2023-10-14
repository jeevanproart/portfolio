import React from 'react';
import myself from '../images/myself.jpg';

const homeStyles = {
  container: {
    marginTop: '5%',
    backgroundColor: 'black', // Set the background color to black
    color: 'white', // Set the text color to white
    padding: '30px', // Add some padding
  },
  image: {
    height: '650px',
  },
};

export const Home = () => {
  return (
    <div style={homeStyles.container} className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to My Portfolio</h1>
          <p>
            "I'm Jeevan, an enthusiastic student with a passion for learning. I specialize in Computer Science and Artificial Intelligence, with a strong foundation in Machine Learning. My journey has also led me to achieve notable milestones in the field of Robotics.

            Explore my projects, get to know me better, and let's connect to create something extraordinary together. I'm always eager to embrace new opportunities and collaborate on exciting projects. Feel free to reach out, and let's turn ideas into reality!"
          </p>
          <button className="btn btn-primary">View Projects</button>
        </div>
        <div className="col-md-6">
          <img
            src={myself}
            alt="Your Name"
            style={homeStyles.image}
          />
        </div>
      </div>
    </div>
  );
};
