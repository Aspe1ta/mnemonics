import React from "react";
import Landing from "./../landing/landing.js"
import Search from "./../search/search.js"


class Parent extends React.Component {
    
  

  componentWillUnmount() {
    console.log('unmounted');
  }
    render() {

      

      

      if (this.props.mode === "land") {
        return (
      <>
        <Landing call={this.props.call}></Landing>
      </>
    ) } else {
      return(
        <Search info={this.props.query} call={this.props.call} pull={this.props.pull}></Search>
      )
    } 
  }
}

export default Parent;
