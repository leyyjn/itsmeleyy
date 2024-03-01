import React from 'react';
import "./styles/Home.css";
import bgHome from "../src/assets/img/b.png";

const Home = () => {
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'left',
    paddingLeft: '100px',
    fontFamily: 'Comic Sans MS, cursive',
  };

  const messageStyle = {
    textAlign: 'right',
    marginBottom: '20px',
    fontSize: '18px',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
  };

  return (
    <div className="home-intro">
      <div style={pageBackgroundStyle}>
        <div className="text">
          <h1 style={{fontWeight: 'bold', fontSize: '100px'}}>WELCOME!</h1>
          <p style={messageStyle}>I'm Harley Jane Huertas Cabrera, and this is my page.</p>
          <div style={buttonContainerStyle}>
            <a href="/about" style={buttonStyle}>About Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
