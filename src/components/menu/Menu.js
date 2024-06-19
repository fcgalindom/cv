import React, { useState, useEffect } from 'react';

const Menu = ({updateMenu}) => {
  const [activeSection, setActiveSection] = useState('#header');
  const [navbarMobile, setNavbarMobile] = useState(false);

  const handleNavLinkClick = (hash, e) => {
    updateMenu(hash)
    console.log("hash =>",hash)
    const section = document.querySelector(hash);
    if (section) {
      e.preventDefault();
      
      setActiveSection(hash);

      if (navbarMobile) {
        setNavbarMobile(false);
      }
      
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const header = document.querySelector('#header');
    const sections = document.querySelectorAll('section');

    if (activeSection === '#header') {
      header.classList.remove('header-top');
      sections.forEach((item) => {
        item.classList.remove('section-show');
      });
    } else {
      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top');
        setTimeout(() => {
          sections.forEach((item) => {
            item.classList.remove('section-show');
          });
          document.querySelector(activeSection).classList.add('section-show');
        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show');
        });
        document.querySelector(activeSection).classList.add('section-show');
      }
    }
  }, [activeSection]);

  return (
    <div>
      <header id="header">
        <div className="container" >
          <h1>
            <a href="index.html">Felipe Galindo</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
          <h2>
            I'm a passionate <span>Sistem Engieneer</span> 
          </h2>

          <nav id="navbar" className={`navbar ${navbarMobile ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><a className={`nav-link ${activeSection === '#header' ? 'active' : ''}`} href="#header" onClick={(e) => handleNavLinkClick('#header', e)}>Home</a></li>
              <li><a className={`nav-link ${activeSection === '#about' ? 'active' : ''}`} href="#about" onClick={(e) => handleNavLinkClick('#about', e)}>About</a></li>
              <li><a className={`nav-link ${activeSection === '#resume' ? 'active' : ''}`} href="#resume" onClick={(e) => handleNavLinkClick('#resume', e)}>Resume</a></li>
              <li><a className={`nav-link ${activeSection === '#contact' ? 'active' : ''}`} href="#contact" onClick={(e) => handleNavLinkClick('#contact', e)}>Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={() => setNavbarMobile(!navbarMobile)}></i>
          </nav>
          {/* .navbar */}

          <div className="social-links" >
            <a href="https://wa.me/573182627014" className="twitter"><i className="bi bi-whatsapp"></i></a>
            <a href="https://www.facebook.com/" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/fcgalindom/" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/felipe-camilo-galindo-melo-172b011a4" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </header>
      <section id="about" className="section"></section>
      <section id="resume" className="section"></section>

      <section id="contact" className="section"></section>
    </div>
  );
};

export default Menu;
