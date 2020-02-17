import React from "react";
import Landing from "./../landing/landing.js"
import Search from "./../search/search.js"

class Parent extends React.Component {
    
    
    state = { query: "", mode: "land" }

  

    callbackFunction = event => {
      console.log(event.target.search.value);
      event.preventDefault();
      this.handleSave();
      this.setState({ query: event.target.search.value, mode: "search" });
    };
  
    render() {

      if (this.state.mode === "land") {
        return (
      <>
        <Landing call={this.callbackFunction}></Landing>
      </>
    ) } else {
      return(
        <Search info={this.state.query}></Search>
      )
    } 
  }
}

export default Parent;
