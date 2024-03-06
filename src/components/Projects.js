import { Container, Row, Col, Nav } from "react-bootstrap";
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/images/color-sharp2.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                </div>
              }
            </TrackVisibility>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </TabPane>
                <TabPane eventKey="second">Second tab</TabPane>
                <TabPane eventKey="third">Third tab</TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt='Bg-img-projects' />
    </section>
  )
}
 