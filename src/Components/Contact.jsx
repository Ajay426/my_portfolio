import React from "react";
import "./Contact.css";
import { motion } from 'motion/react'
export default function Contact() {
  return (
    <motion.section initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.4 }}
      className="contact">

      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Let's Work Together </h3>
          <p>
            Have a project in mind or just want to say hi?
            Feel free to reach out. I'm always open to new opportunities.
          </p>

          <div className="contact-info">
            <p>Email: ajaymahato7155@email.com</p>
            <p>Location: India</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            <input type="hidden" name="access_key" value="41c79bd6-610f-4f06-8610-d75161ee67d6"></input>
            <input type="text" placeholder="Your Name" name="name" required />
            <input type="email" placeholder="Your Email" name="email" required />
            <textarea placeholder="Your Message" rows="5" name="message" required />

            <button type="submit">Send Message</button>

          </form>
        </div>

      </div>

      {/* FLOATING SHAPES */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

    </motion.section>
  );
}