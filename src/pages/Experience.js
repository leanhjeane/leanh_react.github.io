import "./Experience.css";
import Navbar from "./Navbar";


import leaexI1mage from "../img/leaex.jpg";
import leaex2Image from "../img/leaex2.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />

      

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">My Experiences</h1>
            <br />
            <hr />
          </div>
          <div class="isotope">
            <div class="row">
              <h4><p className="display-6 text-white">Decoration Organizer</p></h4 >
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={leaexI1mage} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              

              

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={leaex2Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              
              <hr />
              

              
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
          <div class="row mt-3">
            <div class="col-md-12 text-center text-md-left text-light">
              <p> Copyrigth@ 2024 LJS Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
