



// App.jsx- landing page (Home page :) )



import "./App.css";
import "./styles/landingpage.css"; 
import Header from "./components/header";
function App() {
  return (
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
            <p className="card-title">Semester Project 2- Auction House</p>
            <div className="card-content">
              <a href="https://storied-croissant-157a76.netlify.app" className="card-link">Netlify</a>
              <button className="details-button" data-modal-target="modal-3">Details</button>
              <a href="https://github.com/AutopsyTurvy/Semester-Project-2-Kitty-Alice-Case.git" className="card-link">GitHub</a>
            </div>
          </div>

          <div id="modal-3" className="modal">
            <div className="modal-content">
              <span className="close-button">&times;</span>
              <h3 className="modal-title">Semester Project 2</h3>
              <p className="modal-paragraph">See more on the README.md file!</p>
            </div>
          </div>
        </div>

      
        <div className="sticky-note-image">




          <div className="card">
            <div className="image-link-container">
              <a href="https://animated-macaron-8fe533.netlify.app" className="card-link">
                <img className="card-image" src="/images/javascriptframeworksbidnest.jpeg" alt="Screenshot of JavaScript Frameworks Project" />
              </a>
            </div>
            <p className="card-title">JavaScript Frameworks- E-commerce Store (BidNest)</p>
            <div className="card-links">
              <a href="https://animated-macaron-8fe533.netlify.app" className="card-link">Netlify</a>
              <button className="details-button" data-modal-target="modal-1">Details</button>
              <a href="https://github.com/AutopsyTurvy/e-commerce-store-front-end-frameworks.git" className="card-link">GitHub</a>
            </div>
          </div>



          <div id="modal-1" className="modal">
            <div className="modal-content">
              <span className="close-button">&times;</span>
              <h3 className="modal-title">JavaScript Frameworks- E-commerce Store (BidNest)</h3>
              <p className="modal-paragraph">See more on the README.md file!</p>
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

      <div className="h2-container">
        <h3 className="Projects-so-far-header">Work from last year:</h3>
      </div>

      <div className="cards-container">
      
        <div className="sticky-note-image">
          <div className="card">
            <a href="https://enchanting-kringle-525ad3.netlify.app" className="card-link">
              <img className="card-image" src="/images/theLoreOfPour.jpeg" alt="Screenshot of The Lore of Pour Blog" />
            </a>
            <p className="card-title">The Lore of Pour</p>
            <div className="card-links">
              <a href="https://enchanting-kringle-525ad3.netlify.app" className="card-link">Netlify</a>
              <a href="https://github.com/AutopsyTurvy/The-Lore-of-Pour--Project-Exam-1.git" className="card-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <img className="email-me" src="/images/emailme.png" alt="Email me, and a little arrow pointing below." />

      <div className="video-container">
        <video className="video" width="100%" height="auto" autoPlay loop muted>
          <source src="https://portfolio-bubby-and-i.s3.amazonaws.com/Dream 3-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a className="video-button" href="pages/aboutMe.html">Email Me!</a>
      </div>
    </>
  );
}

export default App;
