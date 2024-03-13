import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/svgs/meter1.svg';
import meter2 from '../assets/svgs/meter2.svg';
import meter3 from '../assets/svgs/meter3.svg';
import colorSharp from '../assets/images/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>With a strong foundation in frontend web development, I bring expertise in HTML5, CSS3, JavaScript, TypeScript, React.js, and Vue.js. I'm adept at creating responsive and user-friendly web applications, ensuring optimal performance across various platforms and devices.<br></br> Whether it is crafting engaging user interfaces, optimizing website performance, or implementing innovative solutions, I'm dedicated to delivering high-quality results that exceed expectations.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter2} alt='skill-img' />
                  <h5>Software Engineer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt='skill-img' />
                  <h5>Frontend Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt='skill-img' />
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt='skill-img' />
                  <h5>Frontend Web Developer</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className='background-image-left' alt='Bg-img-skills' />
    </section>
  );
}
