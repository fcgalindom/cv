import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className="resume"
      style={{ backgroundColor: " rgba(0, 0, 0, 0.8)", zIndex: 2 }}
    >
      <div className="container"  style={{ marginTop:'7rem'}} >
        
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>UNIVERSIDAD DEL BOSQUE -  System Engineer</h4>
              <h5>2018 - 2024</h5>
            </div>
            <div className="resume-item">
              <h4>IPARM(UNIVERSIDAD NACIONAL)</h4>
              <h5>2015 - 2016</h5>
            </div>
            <div className="resume-item">
              <h4>SMART ADEMIA DE INGLES</h4>
              <h5>2023 - Actual</h5>
            </div>
            <h3 className="resume-title">Certification</h3>
            <div className="resume-item">
              <h4>Laravel php - Platzi</h4>
              <h5>2020</h5>
            </div>
            <div className="resume-item">
              <h4>Django python - Platzi</h4>
              <h5>2020</h5>
            </div>
            <div className="resume-item">
              <h4>Git y Github - Platzi</h4>
              <h5>2020</h5>
            </div>
            <div className="resume-item">
              <h4>Power Bi - Cafam Students </h4>
              <h5>2022</h5>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Full Stack Developer (freelance)</h4>
              <h5>Jan 2021 - Apr 2022</h5>
              <p>
                I developed a comprehensive management system for a dental
                clinic using Angular.js and JavaScript for the frontend, Laravel
                (php) for the backend, and deploying the application on AWS and
                Heroku. The system allows the clinic to efficiently manage all
                its operations, from patient management to treatment tracking
                and appointment management. http://www.drdentix.com
              </p>
            </div>
            <div className="resume-item">
              <h4>Backend Developer (Bavaria)</h4>
              <h5>Agos 2022 - Feb 2023</h5>
              <p>
                <em>Stepping Stone Advertising, New York, NY</em>
              </p>
              <p>
                As a backend developer in Bavaria, I had the responsibility of
                providing technical support and ongoing maintenance for Drupal
                and Laravel based systems. Worked closely with the development
                team and stakeholders to ensure optimal performance of
                applications, resolve technical issues and improve process
                efficiency.
              </p>
            </div>

            <div className="resume-item">
              <h4>Full Stack Developer ( Bodytech)</h4>
              <h5>Mar 2023 - Apr 2024</h5>
              <p>
                As a backend developer in Bavaria, I had the responsibility of
                providing technical support and ongoing maintenance for Drupal
                and Laravel based systems. Worked closely with the development
                team and stakeholders to ensure optimal performance of
                applications, resolve technical issues and improve process
                efficiency.
              </p>
            </div>
            <div className="resume-item">
              <h4>Full Stack Developer ( Bodytech)</h4>
              <h5>Ene 2025- Actualidad</h5>
              <p>
              As a full-stack developer at Bodytech, I was part of the team responsible for developing and maintaining web and mobile applications for the company. I used a variety of technologies, including Angular.js, JavaScript, CSS, Bootstrap, React, Laravel, and Python for deep learning projects, to deliver robust and scalable solutions that improved user experience and optimized the company's internal processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
