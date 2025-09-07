import React, { useState } from "react";
import { Element, Link } from "react-scroll";
import "./styles.css";
import { Element } from "react-scroll";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // --- Build a unique subject so email clients won't thread them ---
    const first = (data.get("firstName") || "Someone").toString().trim();
    const last = (data.get("surname") || "").toString().trim();
    const stamp = new Date().toISOString().replace("T", " ").slice(0, 16); // YYYY-MM-DD HH:MM
    const subject = `New portfolio message • ${first} ${last} • ${stamp}`;
    data.set("subject", subject); // <-- Formspree reads this as the email subject
    data.set("_replyto", data.get("email")); // <-- makes your Reply go to the sender

    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/movnjkdw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
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
    <Element name="contact" className="section contact">
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
                type="hidden"
                name="subject"
                value="New portfolio message"
              />

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
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </Element>
  );
}

export default Contact;
