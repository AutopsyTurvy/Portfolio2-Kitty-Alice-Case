






import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectsLastYear from "./projectslastyear";
import Modal from "./modal";

export default function HomeContent() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
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
              <button className="details-button" onClick={() => openModal("auctionHouse")}>Details</button>
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
              <button className="details-button" onClick={() => openModal("bidNest")}>Details</button>
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
              <button className="details-button" onClick={() => openModal("holidaze")}>Details</button>
              <a href="https://github.com/AutopsyTurvy/project-exam-2-final-kitty-alice-case.git" className="card-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <ProjectsLastYear />

      <img className="email-me" src="/images/emailme.png" alt="Email me, and a little arrow pointing below." />

      <div className="video-container">
        <video className="video" height="auto" autoPlay loop muted>
          <source src="https://me-in-the-midst.s3.eu-west-2.amazonaws.com/Dream+7-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Link className="email-me-button" to="/aboutme">Email Me!</Link>
      </div>

      
      <Modal
        show={activeModal === "auctionHouse"}
        onClose={closeModal}
        title="Semester Project 2 - Auction House"
        description="This project involved creating an auction house web application using JavaScript and a REST API..."
      />

      <Modal
        show={activeModal === "bidNest"}
        onClose={closeModal}
        title="JavaScript Frameworks - E-commerce Store (BidNest)"
        description="An online marketplace built using React and a headless CMS, allowing users to bid on various products."
      />

      <Modal
        show={activeModal === "holidaze"}
        onClose={closeModal}
        title="Project Exam 2: Holidaze"
        description="The last exam of our school experience with Noroff, and the most extensive and complex pieve of work to date.
                It consisted of three sections of the Noroff api- One for registration and Login, one for registered users of the site 
                (this excluded the things that a user that was not registered could do or see on the site), the second for a registered user, 
                those needing to be able to make bookings on the venues that were being created/ were already fetched by the API, and finally, 
                a user that had registered as a venue manager- these should be able to create venues and see all of the bookings made on any venue that they create.
                Just as with the design of this portfolio, I chose a design that incorperated self made illustrations, so I could experiment with the extent 
                to which I could manipulate the things on the page to interact with the backgrounds to give a specific feel.
                I think this made the entire experience much more entertaining to work on, and though the effect needs honing,
                 would like to create more and try different things.
                 I hope the travel 'mood' comes across with the use of passports and maps.
                 The Javascript in this piece of work was the most complex we had used to date, but I did discover my fondness for modular CSS over things like bootstrap or 
                 tailwind- I left the list of things I would like to do to improve this piece in the README.md file- for those, click the Github link."
      />
    </>
  );
}
