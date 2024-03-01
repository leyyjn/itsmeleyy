import React, { useState } from 'react';
import bgHome from "../src/assets/img/april.png";

const Contact = () => {
  const pageBackgroundStyle = {
    backgroundImage: `url(${bgHome})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    WebkitBackdropFilter: 'blur(5px)', 
    backdropFilter: 'blur(5px)', 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'left',
    fontFamily: 'Comic Sans MS, cursive',
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '20px',
    borderRadius: '10px',
    marginLeft: '750px',
    marginRight: '100px',
    marginTop: '20px',
    width: '40%',
    maxWidth: '400px',
    height: 'auto',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputContainerStyle = {
    marginBottom: '15px',
  };

  const inputStyle = {
    width: '100%',
    height: '30px',
  };

  const textareaStyle = {
    width: '100%',
    minHeight: '80px',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={pageBackgroundStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div style={inputContainerStyle}>
            <label htmlFor="name">Name:</label>
            <input
              style={inputStyle}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="email">Email:</label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="message">Message:</label>
            <textarea
              style={textareaStyle}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div style={buttonContainerStyle}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
