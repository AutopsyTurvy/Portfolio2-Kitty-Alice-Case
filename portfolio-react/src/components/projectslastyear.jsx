






import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css"; 
import Modal from "./modal";

const ProjectsLastYear = () => {
  const [modal, setModal] = useState(null);

  const openModal = (id) => {
    setModal(id);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <>
      <div className="h2-container">
        <h3 className="Projects-so-far-header">Work from last year:</h3>
      </div>

      <div className="cards-container">
        
       
        <div className="sticky-note-image">
          <div className="card">
            <div className="image-link-container">
              <a href="https://enchanting-kringle-525ad3.netlify.app" className="card-link">
                <img className="card-image" src="/images/theLoreOfPour.jpeg" alt="Screenshot of The Lore of Pour Blog" />
              </a>
            </div>
            <p className="card-title">The Lore of Pour</p>
            <div className="card-links">
              <a href="https://enchanting-kringle-525ad3.netlify.app" className="card-link">Netlify</a>
              <button className="details-button" onClick={() => openModal(1)}>Details</button>
              <a href="https://github.com/AutopsyTurvy/The-Lore-of-Pour--Project-Exam-1.git" className="card-link">GitHub</a>
            </div>
          </div>
        </div>

      
        <div className="sticky-note-image-2">
          <div className="card">
            <a href="https://melodious-griffin-3e41f3.netlify.app" className="card-link">
              <img src="/images/communityScienceMuseum.jpeg" alt="Screenshot of Community Science Museum" className="card-image" />
            </a>
            <p className="card-title">Community Science Museum</p>
            <div className="card-content">
              <a href="https://melodious-griffin-3e41f3.netlify.app" className="card-link">Netlify</a>
              <button className="details-button" onClick={() => openModal(2)}>Details</button>
              <a href="https://github.com/AutopsyTurvy/CommunityScienceMuseum.git" className="card-link">GitHub</a>
            </div>
          </div>
        </div>

       
        <div className="sticky-note-image-3">
          <div className="card">
            <a href="https://celebrated-platypus-88cfdb.netlify.app" className="card-link">
              <img src="/images/gameHub.jpeg" alt="Screenshot of Game Hub" className="card-image" />
            </a>
            <p className="card-title">Game Hub</p>
            <div className="card-content">
              <a href="https://celebrated-platypus-88cfdb.netlify.app" className="card-link">Netlify</a>
              <button className="details-button" onClick={() => openModal(3)}>Details</button>
              <a href="https://github.com/AutopsyTurvy/GameHub-KittyAliceCase.git" className="card-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>

    
      <Modal
        show={modal === 1}
        onClose={closeModal}
        title="The Lore of Pour"
        description='"The Lore of Pour" was our final exam of Noroff first year, 
                        and perhaps our most extensive use of JavaScript to date. 
                        Our brief was to create a blog site hosted by wordpress, 
                        and to fetch the data via an API call. 
                        The site could be on any topic we chose, 
                        but had specific pages and functionality that we were required to include- 
                        I chose to make a peaceful, 
                        sleepy tea blog that also sold teacups
                        to go with the posts on serving and enjoying the perfect brew.
                        The purpose of the site is purely informative and entertaining- 
                        all about tea- its history, how England stole it, 
                        its cultural, artistic and social significance, 
                        how it has shaped countries, literature and the class systems, 
                        its many health benefits and how to brew the perfect cup. 
                        On top of this I had planned on adding a shop 
                        section so you could buy the perfect cup to go with your 
                        edification. (See more on the README.md file)'
      />

      <Modal
        show={modal === 2}
        onClose={closeModal}
        title="Community Science Museum"
        description="The first exam of our school year, build of purely HTML and CSS, 
                        as we had not yet completed our JavaScript 1 module. (Our half year exam.)
                        The brief was to build a website for a community science museum for children and young adults, 
                        to invite them to visit and keep them updated on the exhibits the museum currently held.
                        In its essence the exercise was to test our CSS and HTML skills- 
                        the brief itself was to be child and young person-friendly, to advertise the exhibits and special events that the museum was showing, 
                        what facilities were available for visiting schools and to let people know the location of the museum itself. (See more on the README.md file)"
      />

      <Modal
        show={modal === 3}
        onClose={closeModal}
        title="Game Hub"
        description="Game Hub, Cross Course Project- Our most extensive and so, most complete 
                        project so far- This was the first project in the first year of our Studies, and the piece to which we have 
                        continually added as our studies progress. The work on this piece began with the design phase, 
                        then was built in HTML and CSS, was left to the wayside for our half year exam (The Community Science Museum brief) 
                        this piece was our initial introduction into design and CSS, then an exercise in stretching our JavaScript skills. 
                        The main purpose of this site was to advertise and sell games at competitive prices, 
                        to be able to view them and their specific details and to add them to your cart.
                        A game purchasing site with competitive prices and smooth functionality. 
                        An exercise in our design and JavaScript skills. (See more on the README.md file!)"
      />
    </>
  );
};

export default ProjectsLastYear;
