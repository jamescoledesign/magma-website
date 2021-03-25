import React from "react";
import Tower from "../../static/img/tower.png";

const UserStories = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="user-stories">
          <div className="three-col">

            <div className="user-story-lt-rt">
              <div className="img-container-user-story">
                <img className="img-lt" src={Tower} />
                </div>
                <h3 className="user-story-title">First user story headline goes in this space</h3>
                <p>Page layout is where these components come together.</p>
            </div>

            <div className="user-story-middle">
              <div className="img-container-user-story">
                <img className="img-lt" src={Tower} />
                </div>
                <h3 className="user-story-title">First user story headline goes in this space</h3>
                <p>Page layout is where these components come together.</p>
            </div>

            <div className="user-story">
              <div className="img-container-user-story">
                <img className="img-lt" src={Tower} />
                </div>
                <h3 className="user-story-title">First user story headline goes in this space</h3>
                <p>Page layout is where these components come together.</p>
            </div>

          </div>
        </section>  
      </React.Fragment>
    );
  }
};
export default UserStories ;
