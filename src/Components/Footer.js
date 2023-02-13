import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/icons8-g-64.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/icons8-github-60.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="#"><img src={logo} className='Logo1' alt="Logo"/></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gabriel-leonardo-forero-perea/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Leopoldo983"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}