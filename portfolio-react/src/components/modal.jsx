




import React from "react";
import "../styles/modal.css"; 

const Modal = ({ show, onClose, title, description }) => {
  if (!show) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h3 className="modal-title">{title}</h3>
        <p className="modal-paragraph">{description}</p>
      </div>
    </div>
  );
};

export default Modal;