import {Col, Container, Tab, Row, Nav} from 'react-bootstrap'
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
    
  const projects = [
    {
      title: "Frontend Developer",
      description: "Movie App",
      imgUrl: projImg1,
      urlProject: 'https://phenomenal-croissant-7d3dbe.netlify.app/'
    },
    {
      title: "Frontend Developer",
      description: "Short links page",
      imgUrl: projImg2,
      urlProject: 'https://linksappp.netlify.app/'
    },
    {
      title: "Frontend Developer",
      description: "Todo List",
      imgUrl: projImg3,
      urlProject: 'https://nootessappp.netlify.app/'
    },
    {
      title: "Frontend Developer",
      description: "Soon",
      imgUrl: projImg1,
      urlProject: ''
    },
    {
      title: "Frontend Developer",
      description: "Soon",
      imgUrl: projImg2,
      urlProject: ''
    },
    {
      title: "Frontend Developer",
      description: "Soon",
      imgUrl: projImg3,
      urlProject: ''
    },
  ];
    
    return (
      <section className="project" id="projects">
      <Container>
          <Row>
              <Col size={12}>
                  <h2>Projects</h2>
                  <p>
                  Here are some of the projects I've done, using front technologies like: React, JavaScript, HTML, CSS, Git, 
                  Bootstrap
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                      <Nav variant="pills" className='nav-pills mb-5 justify-content-center aling-items-center' id='pills-tab'>
                      </Nav>
                      <Tab.Content>
                          <Tab.Pane eventKey="first">
                              <Row>
                                  {
                                      projects.map((project, index)=>{
                                          return (
                                              <ProjectCard
                                                  key={index}
                                                  {...project}
                                              />
                                          )
                                      })
                                  }
                              </Row>
                          </Tab.Pane>
                      </Tab.Content>
                  </Tab.Container>
              </Col>
          </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
  </section>
    )
}