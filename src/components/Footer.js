import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/svgs/logo.svg";
import navIcon1 from '../assets/svgs/linkedin.svg';
import navIcon2 from '../assets/svgs/github.svg';
import navIcon3 from '../assets/svgs/twitter.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/henry-uzor-gmnse/"><img src={navIcon1} alt="linkedIn" /></a>
              <a href="https://github.com/Sandiego17"><img src={navIcon2} alt="github" /></a>
              <a href="https://twitter.com/sandiego1611"><img src={navIcon3} alt="x" /></a>
            </div>
            <p>&#169; Copyright 2024. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
