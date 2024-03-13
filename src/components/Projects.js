import { Container, Row, Col, Nav } from "react-bootstrap";
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import profileImg from '../assets/images/profile-image.png';
import { ProjectCard } from "./ProjectCard";
import { TechStackCard } from "./TechStackCard";
import colorSharp2 from '../assets/images/color-sharp2.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = ({ projects, stacks }) => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                </div>
              }
            </TrackVisibility>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tech Stack</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <div className="profile">
                    <img src={profileImg} className="profileImg" alt="profile img" />
                    <p>My name is <b>Henry Tochukwu Uzor</b> and I am a Frontend Software Engineer with about 3 years of experience in Frontend Web Development. My core tech stacks include HTML, CSS, SASS, Bootstrap, TailwindCSS, Git, GitHub, JavaScript, TypeScript, Cypress, Vue3.JS, and React.JS.<br></br>
                    I am a strong and active team player, as highlighted by my continuous contribution and collaboration with team members on company projects such as SEPAL3.0 project, and the eHSAT+ project. This skill is also highlighted by my previous participation and function as the Assistant General Secretary of the Young Engineers Forum of Nigeria (YEFoN), Nigerian Society of Engineers (NSE), and now the current General Secretary of the same association.<br></br>
                    What motivates me is that I am goal-oriented and I very much like to challenge myself to new goals, accomplishments, and endeavors. What makes me unique is my commitment to team objectives, placing the needs of the team above everything else.<br></br>
                    Beyond my professional career, I have been privileged to be the Lead Tutor of a free Software Bootcamp with about 15 Frontend newbies, and I have a weekly newsletter I write on LinkedIn that teaches about Frontend Development. I have completed a few projects as a team member for my company and on a personal level.<br></br>
                    I am passionate about Software Engineering, Artificial intelligence, Virtual and Augmented Reality. I especially find MetaVerse technology a fascinating tool that can be used to upscale and solve a lot of deficiencies in education systems across the globe. The possibilities, potentials, as well as business opportunities that can be unlocked by deploying this technology, are endless.</p>
                  </div>
                </TabPane>
                <TabPane eventKey="second">
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <Row id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} />
                            )
                          })
                        }
                      </Row>
                    }
                  </TrackVisibility>
                </TabPane>
                <TabPane eventKey="third">
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <Row id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        {
                          stacks.map((stack, index) => {
                            return (
                              <TechStackCard key={index} {...stack} />
                            )
                          })
                        }
                      </Row>
                    }
                  </TrackVisibility>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} className="background-image-right" alt='Bg-img-projects' />
    </section>
  );
}
 