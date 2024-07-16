import "./Home.css";
import leaopicImage from "../img/leaopic.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        
          <div className="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold ">
                        Leanh Jeane C. Siblano
                      </h1>
                      <br />
                      <p >
                        I'm a Graphic Designer And I love Watching Movies
                      </p>
                      <a href="/about" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={leaopicImage}
                        alt="Profile Picture of Rusty Adolfo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>Copyright@ 2024 LJS Portfolio</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
