import React from "react";
import "./header.scss";
import { Link } from 'react-router-dom';
import icon from "./../../assets/search.png"

class Header extends React.Component {

  
  render() {



    return (
      <>
        <div className="header">
          <div className="logoContain">
            <div className="logo">Logo Here</div>
          </div>

          <div className="mainSearch">
              <form className=" HeadermainForm" onSubmit={this.props.call}>
                <input name={"search"} type="search" placeholder="Search" />
                <button className="HeadersearchButton">
                  <img className="searchIcon" src={icon}/>
                  <h2 className="HeadersearchButtonText">Search</h2>
                </button>
              </form>
            </div>

            <div className="headerLinkContain">
            <Link to="/" className="AboutLink">
                <h2 className="bottomButtons">About</h2>
            </Link>

            <Link to="/login" className="SignLink">
                  <h2 className="bottomButtons">Login</h2>
            </Link>
            </div>

        </div>
      </>
    );
  }
}

export default Header;
