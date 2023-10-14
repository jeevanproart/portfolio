import React from 'react';

const aboutStyles = {
  container: {
    marginTop: '50px',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  content: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  skillsList: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
};

export const About = () => {
  return (
    <div style={aboutStyles.container}>
      <h1 style={aboutStyles.heading}>About Me</h1>
      <div style={aboutStyles.content}>
        <p>
          I'm Jeevan, a dedicated student with a passion for coding and a versatile skill set that includes various programming languages such as Java, C, C#, JavaScript, and more. Currently, I'm on a learning journey, exploring the exciting world of MERN stack development.
        </p>
        <p>
          My enthusiasm for coding began with an insatiable curiosity and has since evolved into a profound journey of continuous learning and growth. I have a deep-seated love for technology and a strong foundation in a diverse range of programming languages. As a student, I'm constantly seeking opportunities to expand my horizons and embrace new challenges.
        </p>
        <p>
          When I'm not immersed in my coding projects, I indulge in my favorite hobbies, which provide a perfect counterbalance and a wellspring of inspiration. My dedication is unwavering, especially when it comes to [Your Passion or Goal], where I aim to make a positive impact.
        </p>
        <p>
          My repertoire of skills encompasses a variety of technologies, including but not limited to:
        </p>
        <ul style={aboutStyles.skillsList}>
          <li>TAILWIND</li>
          <li>NEXT JS</li>
          <li>REACT</li>
          <li>JAVA</li>
        </ul>
        <p>
          What makes my journey truly exciting is my unending quest for knowledge and readiness to seize fresh opportunities. I'm always open to collaborations and firmly believe that together, we can create something extraordinary. Don't hesitate to get in touch, and let's embark on the next chapter of our shared endeavors.
        </p>
      </div>
    </div>
  );
};
