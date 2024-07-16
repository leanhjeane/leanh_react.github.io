import React from 'react';
import "./Portfolio.css";
import Navbar from "./Navbar";

import leanVideo from "../Videos/lean.mp4";
import port1Image from '../img/port1.png';
import port2Image from '../img/port2.png';


const Portfolio = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">Projects</h1>
            <br />
            <hr className="text-white" />
          </div>
          <div className="isotope">
            <div className="row">
              <p className="display-6 text-white">Website I Created</p>

              {/* First project item */}
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
                <div className="item">
                  <div className="video-container">
                    <video width="100%" controls>
                      <source src={leanVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
                <div className="item mt-3 text-white">
                  <h5>The 12 best beaches in the Philippines</h5>
                  <p>* picture-perfect beaches go together like a bucket and spade. The country
                     is made up of more than 7000 islands, and almost all of them boast at least one
                      stretch of pristine golden sand with iconic bangka boats bobbing in shallow teal
                       waters offshore. Whether you're looking to find an underrated spot on a secluded island,
                        a cove with a good swell for surfing, or a lively patch where you can enjoy a cocktail in 
                        the sun, here are 12 of the best beaches in the Philippines. </p>

                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            
            <br />
            <hr className="text-white" />
          </div>
          <div className="isotope">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img src={port1Image} alt="one" />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img src={port2Image} alt="two" />
                  <div className="overlay"></div>
                </div>
              </div>

              

              <hr className="text-white" />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center text-md-left text-light">
              <p> Copyright@ 2024 LJS Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
