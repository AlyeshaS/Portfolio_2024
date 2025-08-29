import React, { useState } from "react";
import "./styles.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/movnjkdw", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thank you! Your message has been sent.");
      form.reset();
    } else {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  const handleClose = () => setStatus("");

  return (
    <div className="section contact">
      <div className="container">
        <h1 className="section-header">Contact Me</h1>
        {status ? (
          <div className="form-status-message">
            <p>{status}</p>
            <button className="close-popup" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                name="firstName"
                placeholder="First Name:"
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address:"
                required
              />
              <input type="text" name="phone" placeholder="Phone Number" />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
