import React from "react";
import { Link } from 'react-router-dom';
import "./landing.scss";
import Header from "./../header/header.js";
import Search from "./../search/search.js";

import searchIcon from "./../../assets/search.png";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", mode: "land", pull: [{}], update: 0 };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.setState({ query: this.state.query, mode: "search" });
  }

  render() {
    console.log(this.props.location);

    return (
      <>
        <Header call={this.props.call}></Header>

        <div className="landContain">
          <div className="mainContain">
            <div className="mainLogoContain">
              <h1>Mnemonicon</h1>
            </div>
            <div className="mainSearch">
              <form className="mainForm" onSubmit={this.props.call}>
                <input name={"search"} type="search" placeholder="Search..." />
                <button className="searchButton">Search</button>
              </form>
            </div>
            <div className="mainSub">
              <p className="mainSub__Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                porta vulputate nisl at pretium. Praesent at quam vel enim
                eleifend volutpat. Pellentesque ac suscipit ipsum. Proin vitae
                ipsum quis ligula cursus malesuada. Phasellus scelerisque ut
                tellus ut tincidunt. Duis interdum condimentum quam vitae
                venenatis. Praesent molestie libero nec sapien congue
                vestibulum.
              </p>
            </div>

            <div className="buttonContain">
              <Link to="/login" className="buttonLink">
                <button className="bottomButtons">Login</button>
              </Link>

              <Link to="/signUp" className="buttonLink">
                <button className="bottomButtons">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
