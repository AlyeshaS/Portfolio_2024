import React from "react";

import "./styles.css";

function Contact() {
  return (
    <div className="section contact">
      <div className="container">
        <h1 className="section-header">Contact Me</h1>
        <div className="form-container">
          <div className="form-grid">
            <input type="text" placeholder="First Name:" />
            <input type="text" placeholder="Surname" />
            <input type="text" placeholder="Email Address:" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Message" rows={5}></textarea>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
