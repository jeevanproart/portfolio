import React from 'react';

export const ContactUs = () => {
  const contactUsStyles = {
    backgroundColor: 'black', // Set the background color of the container to black
    color: 'white', // Set the text color of the container to white
    padding: '20px', // Add some padding to the content
  };

  const inputStyles = {
    backgroundColor: 'black', // Set the background color of the input boxes to black
    color: 'white', // Set the text color of the input boxes to white
  };

  return (
    <div className="container mt-5" style={contactUsStyles}>
      <h1>Contact Us</h1>
      <p>If you'd like to reach out or collaborate, please feel free to contact us using the form below:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" style={inputStyles} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" style={inputStyles} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message" style={inputStyles} />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};
