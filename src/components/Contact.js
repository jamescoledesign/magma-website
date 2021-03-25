import React from "react";
import Paperwork from "../../static/img/paperwork.png";
import Facebook from "../../static/img/facebook-icon.svg";
import LinkedIn from "../../static/img/linkedin-icon.svg";
import Twitter from "../../static/img/twitter-icon.svg";

const Contact = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
          <div className="two-col contact-section">
            <div className="container-one">
              <div className="section-text-left">
                <h2>Contact</h2>
                <p className="section-paragraph contact-info">It is important to realize that by their very definition, prototypes will represent some compromise from the final design.
                </p>
                <a href="mailto: community@openinfra.dev" className="text-cta">Send us an email</a>
                <div className="social-icons">
                  <a href="mailto: community@openinfra.dev"><img className="social-icon" src={Facebook} /></a>
                  <a href="mailto: community@openinfra.dev"><img className="social-icon" src={LinkedIn} /></a>
                  <a href="mailto: community@openinfra.dev"><img className="social-icon" src={Twitter} /></a>
                </div>
              </div>
              <div className="img-container-rt">
                <img className="img-rt" src={Paperwork} />
              </div>
            </div>

          </div>  
      </React.Fragment>
    );
  }
};

export default Contact;
