import React from "react";
import "./main.scss";
import Header from "./../header/header.js";
import axios from "axios";

class Main extends React.Component {
    
  state = {
    video: {}
  }

  
    render() {

      console.log(this.props);
      console.log(this.state);

    return (
      <>
        <Header></Header>
        <h1>Here we go</h1>
        <div>
        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + this.props.match.params.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </>
    );
  }
}

export default Main;
