import React from 'react'
import NavLogo from  '../../static/img/magma-logo.svg'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <nav className="static-nav">
      <div className="navbar-primary">
        <div className="nav-logo"><img src={NavLogo} alt="Magma Logo" /></div>
     
          <div className="subnav">
            <button className="subnavbtn">About</button>
          </div> 

          <div className="subnav">
            <button className="subnavbtn">User Stories</button>
          </div> 

          <div className="subnav">
            <button className="subnavbtn">Community<i className="fa fa-caret-down"></i></button>
            <div className="subnav-content">
              <div className="subnav-item"><a href="#company">Governance</a></div>
              <div className="subnav-item"><a href="#team">Magma Dev Conf 2021</a></div>
            </div>
          </div> 

          <div className="subnav">
            <button className="subnavbtn">Docs</button>
          </div> 
          
          <div className="subnav">
            <button className="subnavbtn">Supporters</button>
          </div> 

          <div class="subnav">
            <button class="subnavbtn">News<i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
            <div className="subnav-item"><a href="#team">Blog</a></div>
            </div>
          </div> 

      </div>
    </nav>
    )
  }    
}

export default Navbar
