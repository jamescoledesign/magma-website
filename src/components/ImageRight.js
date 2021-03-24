import React from "react";
import ImageOne from "../../static/img/paperwork.png";

const ImageRight = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="section-one">
          <div className="two-col">

            <div className="container-one">
              <div className="section-text-left">
                <h5 className="section-tag">ABOUT MAGMA</h5>
                <h2>Converged Services. Distributed Deployment.</h2>
                <p className="section-paragraph">Magma connects 100 to 1,000,000 servers using the same fully distributed network architecture. Designed to be access network (cellular or wifi) and 3GPP release agnostic, it can flexibly support a radio access network with minimal development and deployment effort.</p>
              </div>
              <div className="img-container-rt">
                <img className="img-rt" src={ImageOne} />
              </div>
            </div>

          </div>  
        </div>
      </React.Fragment>
    );
  }
};

export default ImageRight;
