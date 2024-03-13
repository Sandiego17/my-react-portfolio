import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/svgs/logo.svg";
import navIcon1 from "../assets/svgs/nav-icon1.svg";
import navIcon2 from "../assets/svgs/nav-icon2.svg";
import navIcon3 from "../assets/svgs/nav-icon3.svg";

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
              <a href="#"><img src={navIcon1} alt="social" /></a>
              <a href="#"><img src={navIcon2} alt="social" /></a>
              <a href="#"><img src={navIcon3} alt="social" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
