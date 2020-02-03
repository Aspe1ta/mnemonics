import React from "react";
import Landing from "./../components/landing/landing.js";
import Search from "./../search/search.js"

class Parent extends React.Component {
    

    state = { query: "" }

  

    callbackFunction = (childData) => {
          this.setState({message: childData})
          
    }
  
    render() {

    


    return (
      <>
        <Landing call={this.callbackFunction}></Landing>
        <Search></Search>
      </>
    );
  }
}

export default Parent;
