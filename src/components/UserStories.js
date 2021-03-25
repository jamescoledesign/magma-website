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
                <img className="img-user-story" src={Atalaya} />
                </div>
                <h3 className="user-story-title">First user story headline goes in this space</h3>
                <p>Page layout is where these components come together.</p>
            </div>

            <div className="user-story-middle">
              <div className="img-container-user-story">
                <img className="img-user-story" src={Charity} />
                </div>
                <h3 className="user-story-title">Second user story headline goes in this space</h3>
                <p>Page layout is where these components come together.</p>
            </div>

            <div className="user-story-lt-rt">
              <div className="img-container-user-story">
                <img className="img-user-story" src={Kamol} />
                </div>
                <h3 className="user-story-title">Third user story headline goes in this space</h3>
                <p>Page layout is where these components come together.</p>
            </div>

          </div>
        </section>  
      </React.Fragment>
    );
  }
};
export default UserStories ;
