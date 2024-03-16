import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from '../assets/images/banner-image.png';
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Software Engineer.", "Frontend Developer.", "Web Developer." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn animate__delay-1s" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hi,</h1>
                  <h1 className="myName">{`I'm Henry Uzor, a `}<span className="wrap">{text}</span></h1>
                  <p>Thank you for visiting! I am a passionate Frontend Developer based in Nigeria, with a keen eye for responsive design and a passion for creating engaging user experiences. I invite you to explore this portfolio website of mine that showcases my skills, projects, and tech stack. Do not hesitate to reach out if you have any questions or would like to discuss potential opportunities. Thank you for stopping by, and I look forward to connecting with you!</p>
                  <a href="#connect"><button>Let’s Connect <ArrowRightCircle size={25}/></button></a>
                  {/* <a href="#"><button>Resume</button></a> */}
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImage} alt="Header img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
