import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div id="contact">
      <h1>Get in Touch</h1>
      <form action="https://formsubmit.co/deeracode@gmail.com" method="POST">
        <label>Email</label>
        <input type="email" name="email" />

        <label>Message</label>
        <textarea id="message" name="message" />
        <button className="btn btn-secondary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
