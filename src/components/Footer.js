import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/hackerrank.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/satviksrivastava7/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/satviksrivastava7" target="_blank"><img src={navIcon4} alt="github" /></a>
                <a href="https://www.instagram.com/satviksrivastava7/?hl=en" target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://www.hackerrank.com/satvikseven7?hr_r=1" target="_blank"><img src={navIcon2} alt="hackerrank" /></a>
            </div>
            <p>Created by Satvik Srivastava using React JS</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}