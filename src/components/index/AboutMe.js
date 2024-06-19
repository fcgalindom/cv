import React from 'react';
import presentacion from '../../images/personal.jpeg'


const AboutMe = () => {
  return (
    <div className="about-me container">
      <div className="row" style={{ marginTop:'7rem'}}>
        <div className="col-lg-4" data-aos="fade-right">
          <img src={presentacion} className="img-fluid" alt="" />
          <img></img>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Sistem Engieneer</h3>
          <p className="fst-italic">
          I am a full-stack developer with experience in PHP Laravel, specialized in creating digital products.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+57 3182627014</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Colombia - Bogota</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Ingeneer</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>felipecamilo7@gmail.com</span></li>

              </ul>
            </div>
          </div>
          <p>
          I have skills in
React.js with TypeScript and Next.js for dynamic and efficient front-ends. I use Styled Components and design systems
for a consistent user experience. Work with REST APIs and GraphQL, deployment in cloud environments, CI/CD and
monitoring practices. Additionally, I have experience in micro-frontend-based architectures and writing unit and
automated tests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;