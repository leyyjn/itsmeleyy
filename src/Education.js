import * as React from "react";
import Card from 'react-bootstrap/Card';
import "../src/styles/Education.css"; 
import bgHome from "../src/assets/img/bbg.png";

const Education = () => {

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
    paddingLeft: '50px',
  };

  return (
    <div style={pageBackgroundStyle}>
      <div className="d-flex justify-content-center" style={{ marginTop: '100px', marginLeft: '80px' }}>
        <Card className="education-card"> 
          <Card.Img variant="top" src={require("../src/assets/img/union.jpg")} /> 
          <Card.Body className="education-card-body">
            <Card.Title className="education-card-title">Elementary</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              I completed my elementary school education at Union Elementary School in 2015.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="education-card">
          <Card.Img variant="top" src={require("../src/assets/img/olpa.png")} />
          <Card.Body className="education-card-body"> 
            <Card.Title className="education-card-title">Junior High School</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              I completed my junior high school education at Our Lady of La Porteria Academy in 2019.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="education-card">
          <Card.Img variant="top" src={require("../src/assets/img/olpa.png")} />
          <Card.Body className="education-card-body">
            <Card.Title className="education-card-title">Senior High School</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              I completed my senior high school education at Our Lady of La Porteria Academy in 2021.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="education-card">
          <Card.Img variant="top" src={require("../src/assets/img/ncf3.png")} />
          <Card.Body className="education-card-body">
            <Card.Title className="education-card-title">College</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              I am currently pursuing my college education at Naga College Foundation Inc.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Education;
