import React from "react";
import "./main.scss";
import Header from "./../header/header.js";
import axios from "axios";

class Main extends React.Component {
    
  state = {
    video: {}
  }

  componentDidMount() {
    
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${this.props.match.params.id}&key=AIzaSyByPGQ3kx8Ntul3z91-7f8odXiSgumVLa0`
      )
      .then(response => {

        console.log(response);

        if (this.state.video !== response.data.items) {
          
          this.setState({
            video: response.data.items
          });
        }
      });

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
