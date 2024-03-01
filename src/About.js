import React, { useState } from "react";
import "./styles/About.css";
import Typewriter from "typewriter-effect";
import bgHome from "../src/assets/img/bbg.png";

// Import your images
import mySelf from "../src/assets/img/me.jpg";
import Books from "../src/assets/img/book.jpg";
import EXO from "../src/assets/img/exo.jpg";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const typewriterStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '50px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
    color: 'white',
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={pageBackgroundStyle}></div>
      <div className="pagetitle" style={typewriterStyle}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 20,
            strings: [
              "You want to know me?",
              "You want to know my hobbies?",
              "You want to know my favorite boy band?"
            ],
          }}
        />
      </div>
      <div className="cards">
        <div
          className="card1"
          onClick={() => openModal('card1')}
        >
          <div className="info1">
            <h1>About me</h1>
            <p>I'm Harley Jane H. Cabrera. I'm currently a 3rd year student studying Information Systems at Naga College Foundation, Inc.  </p>
          </div>
          <img src={mySelf} alt="Myself" />
        </div>

        <div
          className="card2"
          onClick={() => openModal('card2')}
        >
          <div className="info2">
            <h1>Hobbies</h1>
            <p>I love reading books. The first story i read is called "Until He Was Gone" by Jonaxx</p>
          </div>
          <img src={Books} alt="Books" />
        </div>

        <div
          className="card3"
          onClick={() => openModal('card3')}
        >
          <div className="info3">
            <h1>My Favorite Boy Band: EXO</h1>
            <p> EXO (엑소) is a South Korean boy group. They have nine members: Xiumin, Suho, Lay, Baekhyun, Chen, Chanyeol, D.O, Kai, and Sehun</p>
          </div>
          <img src={EXO} alt="EXO" />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {selectedCard === 'card1' && (
              <div>
                <h1>About me</h1>
                <p>Name: Harley Jane Huertas Cabrera <br>
                </br>Birthday: May 22, 2003 <br>
                </br>Age: 20 <br>
                </br>Birth Place: San Mateo Rizal <br>
                </br> Height: 154 cm<br>
                </br> Zodiac Sign: Gemini <br>
                </br> Favorite Song: Just as usual by: EXO <br>
                </br>Favorite Color: Purple and Baby blue <br>
                </br> If i could go anywhere I'd go to: Iceland<br>
                </br>What make me happy: Family, Friends, Foods, EXO<br>
                </br>
                </p>
              </div>
            )}
            {selectedCard === 'card2' && (
              <div>
                <h1>Hobbies</h1>
                <p>I have two favorite hobbies. The first is reading. I love reading stories, especially fiction, historical fiction, and novels.
                  I spent my time just reading books, and sometimes I read on an app called Wattpad or Jonaxx.I have so many realizations and ideas when I'm reading. 
                  I also learned some lessons that can help me in life. My second hobby is fangirling hehe. I promised to always support these nine boys. 
                </p>
              </div>
            )}
            {selectedCard === 'card3' && (
              <div>
                <h1>My Favorite Boy Band: EXO</h1>
                <p>EXO debuted on April 8, 2012. EXO is composed of two groups: EXO-K and EXO-M. EXO-K promotes in Korea, while EXO-M promotes in China. 
                  Their fandom name is called EXO-L. So it's called EXO-L because in the middle of K and M there is L; also, the L in EXO-L means LOVE.
                  If you still wanna know more contact.</p>
              </div>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
