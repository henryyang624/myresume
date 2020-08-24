import React from "react";

const ContactMe = () => {
  return (
    <div class="container contact" id="contact">
      <h1>Contact</h1>
      <form>
        <input type="text" name="name" placeholder="Your full name..." />
        <input type="email" placeholder="Your Email..." />
        <input type="email" placeholder="Person@example.com" disabled />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactMe;
