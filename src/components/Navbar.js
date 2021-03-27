import React from 'react'
import NavLogo from  '../../static/img/magma-logo.svg'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Menu from "../content/navbar.json"

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
        
        <div className="nav-logo">
          <Link to="/" title="Magma Website Home">
            <img src={NavLogo} alt="Magma Logo" />
          </Link>
        </div>
      
        <div className="subnav">
          <Link to="/#about"><button className="subnavbtn">About</button></Link>
        </div> 

        <div className="subnav">
        <Link to="/#user-stories"><button className="subnavbtn">User Stories</button></Link>
        </div> 

        <div className="subnav">
        <a href="/community"><button className="subnavbtn">Community<i className="fa fa-caret-down"></i></button></a>
          <div className="subnav-content">
            <div className="arrow-up"></div>
             <div className="subnav-item"><a href="/community#governance">Governance</a></div>
              <div className="subnav-item"><a href="/community/magma-dev-conference-recap-2021/">Magma Dev Conf 2021</a></div>
            </div>
        </div> 

        <div className="subnav">
        <OutboundLink href="https://docs.magmacore.org/docs/basics/introduction.html" rel="noopener noreferrer"><button className="subnavbtn">Docs</button></OutboundLink>
        </div> 
            
        <div className="subnav">
        <Link to="/#supporters"><button className="subnavbtn">Supporters</button></Link>
        </div> 

        <div class="subnav">
        <Link to="/blog"><button class="subnavbtn">News<i class="fa fa-caret-down"></i></button></Link>
          <div class="subnav-content-news">
            <div className="arrow-up-news"></div>
            <div className="subnav-item"><a href="/blog">Blog</a></div>
          </div>
        </div> 

      </div>
    </nav>
    )
  }    
}

export default Navbar
