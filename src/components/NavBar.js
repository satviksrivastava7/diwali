import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/hackerrank.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from "../assets/img/github.svg";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1>Satvik7</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}></Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}></Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('conatct')}></Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/satviksrivastava7/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
                  <a href="https://github.com/satviksrivastava7" target="_blank"><img src={navIcon4} alt="github" /></a>
                  <a href="https://www.instagram.com/satviksrivastava7/?hl=en" target="_blank"><img src={navIcon3} alt="" /></a>
                  <a href="https://www.hackerrank.com/satvikseven7?hr_r=1" target="_blank"><img src={navIcon2} alt="hackerrank" /></a>
                </div>
              </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}