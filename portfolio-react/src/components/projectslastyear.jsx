






import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css"; 

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

          {modal === 1 && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <h3 className="modal-title">The Lore Of Pour</h3>
                <p className="modal-paragraph">
                  "The Lore of Pour" was our final exam of Noroff first year...
                  (See more on the README.md file)
                </p>
              </div>
            </div>
          )}
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

          {modal === 2 && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <h3 className="modal-title">Community Science Museum</h3>
                <p className="modal-paragraph">
                  The first exam of our school year, built purely with HTML and CSS...
                  (See more on the README.md file)
                </p>
              </div>
            </div>
          )}
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

          {modal === 3 && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <h3 className="modal-title">Game Hub</h3>
                <p className="modal-paragraph">
                  Game Hub, Cross Course Project - Our most extensive project so far...
                  (See more on the README.md file!)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsLastYear;