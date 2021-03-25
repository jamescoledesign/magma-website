import React from "react";
import Tower from "../../static/img/tower.png";
import Atalaya from "../../static/img/Atalaya.png";
import Charity from "../../static/img/Charity.png";
import Kamol from "../../static/img/Kamol.png";

const UserStories = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="user-stories">
        <h5 className="section-tag">USER STORIES</h5>
          <div className="three-col">

            <div className="user-story-lt-rt">
              <div className="img-container-user-story">
              <a href="https://www.youtube.com/watch?v=hNHAz6Km-j0&list=PLKqaoAnDyfgolzgeREuKrvsPJhQLTt_he&index=5&t=668s"><img className="img-user-story" src={Atalaya} /></a>
                </div>
                <h3 className="user-story-title">Connecting Tribal nations to life-saving resources</h3>
                <p>MuralNet uses private LTE networks powered by Magma to enable tribal nations to control their internet access.</p>
                <a href="https://www.youtube.com/watch?v=hNHAz6Km-j0&list=PLKqaoAnDyfgolzgeREuKrvsPJhQLTt_he&index=5&t=668s" className="text-cta">Learn More</a>
            </div>

            <div className="user-story-middle">
              <div className="img-container-user-story">
              <a href="https://github.com/magma/magma"><img className="img-user-story" src={Charity} /></a>
                </div>
                <h3 className="user-story-title">Deploying Magma to lower network costs</h3>
                <p>BRCK deploys low cost connectivity in both urban and rural markets in Kenya.</p>
                <a href="https://github.com/magma/magma" className="text-cta">Learn More</a>
            </div>

            <div className="user-story-lt-rt">
              <div className="img-container-user-story">
              <a href="https://www.youtube.com/watch?v=VybSCeTPf88&list=PLKqaoAnDyfgolzgeREuKrvsPJhQLTt_he&index=13&t=917s"><img className="img-user-story" src={Kamol} /></a>
                </div>
                <h3 className="user-story-title">Increasing Network Redundancy with Magma Access Gateways</h3>
                <p>WiConnect Wireless delivers fiber, cable, and wireless-based internet in the southwest region of Wisconsin.</p>
                <a href="https://www.youtube.com/watch?v=VybSCeTPf88&list=PLKqaoAnDyfgolzgeREuKrvsPJhQLTt_he&index=13&t=917s" className="text-cta">Learn More</a>
            </div>

          </div>
        </section>  
      </React.Fragment>
    );
  }
};
export default UserStories ;
