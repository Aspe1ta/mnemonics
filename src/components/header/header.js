import React from "react";
import "./header.scss";
import { Link } from 'react-router-dom';
import icon from "./../../assets/search.png"

class Header extends React.Component {

  
  render() {

    let search = <div className="headerMainSearch">
    <form className=" HeadermainForm" onSubmit={this.props.call}>
      <input name={"search"} type="search" placeholder="Search" />
      <button className="HeadersearchButton">
        <img className="searchIcon" src={icon}/>
        <h2 className="HeadersearchButtonText">Search</h2>
      </button>
    </form>
  </div>;

console.log(this.props.call);

  if (this.props.call == undefined) {
    search = <div className="headerMainSearch"></div>
  }


    return (
      <>
        <div className="header">
          <div className="logoContain">
            <h1 className="logo">Sour Watermelon</h1>
          </div>

          {search}

            <div className="headerLinkContain">
            <Link to="/" className="AboutLink">
                <h2 className="bottomButtons">About</h2>
            </Link>

            <Link to="/login" className="SignLink">
                  <h2 className="bottomButtons">Login</h2>
            </Link>

            <Link to="/signUp" className="SignUpLink">
                  <h2 className="bottomButtonsSign">Sign Up</h2>
            </Link>
            </div>

        </div>
      </>
    );
  }
}

export default Header;
