import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-geo-alt"></i>
              <h3>Location</h3>
              <p>Colmbia - Bogota</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-alexa"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="https://wa.me/573182627014" className="twitter">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.facebook.com/" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/fcgalindom/"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/felipe-camilo-galindo-melo-172b011a4"
                  className="linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-envelope"></i>
              <h3>Email Me</h3>
              <p>felipecamilo7@gmail.com</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bi bi-telephone-inbound"></i>
              <h3>Call Me</h3>
              <p>+57 3182627014</p>
            </div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/felipecamilo7@gmail.com"
          method="post"
          role="form"
          className="php-email-form mt-4"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
