import React, { useEffect } from 'react';
import './About.css';
import Navbar from './Navbar';

import mlImage from '../img/ml.jpg';
import nbaImage from '../img/nba.jpg';
import farImage from '../img/far.jpg';
import cf2Image from '../img/cf2.jpg';

import leaopicImage from '../img/leaopic.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
  faRProject,
} from '@fortawesome/free-brands-svg-icons';


const About = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.text');
    textElements.forEach((element) => {
      setTimeout(() => {
        element.classList.add('show');
      }, 300);
    });
  }, []);

  return (
    <>
      <Navbar />

      <section id="carton" className="parallax-container">
        <div className="parallax-background"></div>
        <div className="container mt-5 parallax-content">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h2 className="text-secondary text-white">About Me</h2>
                  <p className="text-white">
                    As an IT student at Central Philippine State University (CPSU) with a passion for exploring 
                    diverse cultures, I find immense joy in discovering new knowledge about computers, making new friends,
                    and sharing my knowledge with my fellow classmates, inspiring other students who want to be an IT students someday
                    and tech enthusiasts to embark on their own memorable journeys.
                  </p>
                  <br />
                  <h2 className="text-secondary text-white">Academic Journey</h2>
                  <p className="text-white">
                    At the College of Computer Studies, I have
                    gained valuable knowledge in programming languages such as
                    PHP, Web development, JavaScript, and Page designing.
                  </p>
                </div>
                <div className="col-lg-5 mb-5">
                  <center>
                    <img
                      src={leaopicImage}
                      alt="Profile Picture of Rusty Adolfo"
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      

      <section id="education" className="education">
        <div className="section-heading text-center mb-5">
          <h2 className="text-white">Educational Background</h2>
        </div>
        <div className="container">
          <div className="education-horizontal-timeline">
            <div className="row">
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2 className="text-white">2024</h2>
                  </div>
                  <div className="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faUnity} />
                  </div>
                  <div className="timeline text-center">
                    <div className="timeline-content">
                      <h4 className="title text-white">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary text-white">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2 className="text-white">2019</h2>
                  </div>
                  <div className="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faUnity} />
                  </div>
                  <div className="timeline text-center">
                    <div className="timeline-content">
                      <h4 className="title text-white">
                        Bocana National High School
                      </h4>
                      <p className="text-secondary text-white">
                        Bocana Ilog Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h4 className="text-white">2014</h4>
                  </div>
                  <div className="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faUnity} />
                  </div>
                  <div className="timeline text-center">
                    <div className="timeline-content">
                      <h4 className="title text-white">Bocana Elementary School</h4>
                      <p className="text-secondary text-white">
                        Bocana Ilog Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-white" />

      <footer className="text-light pt-4 pb-2">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-warning">Follow me on social media.</h6>
              <p>
                <a
                  href="https://www.facebook.com/leanhjeane.siblano.9/"
                  className="btn btn-container text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
              <p>Leanh Jeane C. Siblano</p>
              <p>
                <a
                  href="https://github.com/leanhjeane"
                  className="btn btn-info text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
              <p>leanhjeane</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> Brgy. Bocana Ilog Negros Occ., Philippines, 6109
              </p>
              <p>
                <i className="fa fa-user"></i> leanhjeanesiblano13@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> 09549821504
              </p>
            </div>

            <div className="row d-flex justify-content-center mt-3">
              <div className="col-md-8 col-lg-8">
                <div className="text-center d-flex justify-content-around">
                  <a href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f text-light mr-4"></i>
                  </a>
                  <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter text-light mr-4"></i>
                  </a>
                  <a href="https://plus.google.com/your-username" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google-plus-g text-light mr-4"></i>
                  </a>
                  <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram text-light mr-4"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in text-light mr-4"></i>
                  </a>
                  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github text-light"></i>
                  </a>
                </div>
              </div>
            </div>
            <hr className="text-white" />
          </div>
          
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                Copyright© 2024  <strong>LJS</strong> All Rights Reserved
              </p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
