import React from "react";

const Form = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <form name="contact" method="POST" data-netlify="true">

            <input className="form-field" type="text" name="name" placeholder="Name" />

            <input className="form-field" type="email" name="email" placeholder="Email" />

            <textarea className="form-field message" name="message" placeholder="Message"></textarea>

            <button className="button is-primary form-button" type="submit">SUBMIT</button>

        </form>
      </React.Fragment>
    );
  }
};

export default Form;
