


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import Header from "./components/header";
import ProjectsLastYear from "./components/projectslastyear";
import "./App.css";
import "./styles/landingpage.css"; 

function App() {
  return (
    <Router>
      <>
       
        <Header /> 

       
        <div className="h2-container">
          <h2 className="Projects-so-far-header">Here's what I've been up to this year:</h2>
        </div>

        <div className="cards-container">
      
          <div className="sticky-note-image-3">
            <div className="card">
              <a href="https://storied-croissant-157a76.netlify.app" className="card-link">
                <img src="/images/semesterproject2auctionhouse.jpeg" alt="Screenshot of Semester project work" className="card-image" />
              </a>
              <p className="card-title">Semester Project 2 - Auction House</p>
              <div className="card-content">
                <a href="https://storied-croissant-157a76.netlify.app" className="card-link">Netlify</a>
                <button className="details-button" data-modal-target="modal-3">Details</button>
                <a href="https://github.com/AutopsyTurvy/Semester-Project-2-Kitty-Alice-Case.git" className="card-link">GitHub</a>
              </div>
            </div>
          </div>

       
          <div className="sticky-note-image">
            <div className="card">
              <a href="https://animated-macaron-8fe533.netlify.app" className="card-link">
                <img className="card-image" src="/images/javascriptframeworksbidnest.jpeg" alt="Screenshot of JavaScript Frameworks Project" />
              </a>
              <p className="card-title">JavaScript Frameworks - E-commerce Store (BidNest)</p>
              <div className="card-links">
                <a href="https://animated-macaron-8fe533.netlify.app" className="card-link">Netlify</a>
                <button className="details-button" data-modal-target="modal-1">Details</button>
                <a href="https://github.com/AutopsyTurvy/e-commerce-store-front-end-frameworks.git" className="card-link">GitHub</a>
              </div>
            </div>
          </div>

         
          <div className="sticky-note-image-2">
            <div className="card">
              <a href="https://astonishing-blini-48b75f.netlify.app" className="card-link">
                <img src="/images/exam2holidaze.jpeg" alt="Screenshot of Holidaze Project" className="card-image" />
              </a>
              <p className="card-title">Project Exam 2: Holidaze</p>
              <div className="card-content">
                <a href="https://astonishing-blini-48b75f.netlify.app" className="card-link">Netlify</a>
                <button className="details-button" data-modal-target="modal-2">Details</button>
                <a href="https://github.com/AutopsyTurvy/project-exam-2-final-kitty-alice-case.git" className="card-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>









        <div class="line-container">
          <div class="line"></div>
        </div>



  
      <ProjectsLastYear />
    

    
        <img className="email-me" src="/images/emailme.png" alt="Email me, and a little arrow pointing below." />

        <div className="video-container">
          <video className="video" width="100%" height="auto" autoPlay loop muted>
            <source src="https://portfolio-bubby-and-i.s3.amazonaws.com/Dream 3-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
          <Link className="email-me-button" to="/about">Email Me!</Link>
        </div>

        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
