import React from 'react';

const About = () => {
  return (
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
      <div className="container">
        <div className="row">
          {/* About Text */}
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
              <h1 className="animated animated-text">
                <span className="mr-2">Hey folks, I'm</span>
                <div className="animated-info">
                  <span className="animated-item">Manjot Singh</span>
                  <span className="animated-item">Web Developer</span>
                  <span className="animated-item">Backend Builder</span>
                </div>
              </h1>
              <p>Bringing ideas to life through design and development. I'm driven by the challenge of delivering engaging user experiences and powerful web applications.</p>

              <div className="custom-btn-group mt-4">
                <a href="#" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
                <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <img src="/assets/images/undraw/undraw_software_engineer_lvl5.svg" className="img-fluid" alt="svg image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
