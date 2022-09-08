import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import './video.css'
import TrackVisibility from 'react-on-screen';
import { Youtube } from "react-bootstrap-icons";
import YouTube from 'react-youtube';

export const Projects = () => {

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Mobile Development
                        </Nav.Link>

                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web application</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Search egine</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>edit text here</p>
                          <YouTube videoId={"rWZ3xozmlqQ"} className="video"/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>edit text here</p>
                          <YouTube videoId={"HjlNHsMEXAg"} className="video" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>edit text here</p>
                          <YouTube videoId={"IpN2AtnLO7U"} className="video" />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
