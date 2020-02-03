import React from "react";
import "./landing.scss";
import Header from "./../header/header.js";
import Search from "./../search/search.js";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: "", mode: "land" };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.setState({query: this.state.query, mode: "search" });
  }

  onFormSubmit = event => {
    console.log(event.target.search.value);
    event.preventDefault();
    this.handleSave();
    this.setState({query: event.target.search.value, mode: "search"});
    
    
  };



  render() {

    console.log(this.state);

    if (this.state.mode === "land"){
      return (
        <>
          <Header></Header>

          <div className="landContain">
            <div className="mainContain">
              <div className="mainLogoContain">
                <h1>Mnemonicon</h1>
              </div>
              <div className="mainSearch">
                <form onSubmit={this.onFormSubmit}>
                  <input
                    name={"search"}
                    type="search"
                    placeholder="Search..."
                  />
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
            </div>
          </div>
        </>
      );
    } else {
        return (
            <Search></Search>
        );
    }
    
      
  }
}


export default Landing;
