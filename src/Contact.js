import React from "react";
import "./contact.css";
import { Button } from "@material-ui/core";

class Contact extends React.Component {
  handleLogin(e) {
    const formData = new FormData(e.target);
    const user = {};

    e.preventDefault();

    for (let entry of formData.entries()) {
      user[entry[0]] = entry[1];
    }

    console.log(user);
    alert("thank you for your message");
  }

  render() {
    return (
      <div className="contact">
        <h2>Thank you for contacting</h2>

        <form onSubmit={this.handleLogin}>
          <input
            className="contact__name"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="contact__email"
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            className="contact__subject"
            type="text"
            name="subject"
            placeholder="subject"
          />
          <textarea
            className="contact__message"
            type="textarea"
            rows="15"
            name="message"
            placeholder="message"
          />

          <Button
            className="contact__submit"
            type="submit"
            variant="outlined"
            color="secondary"
          >
            send message
          </Button>
        </form>
      </div>
    );
  }
}

export default Contact;
