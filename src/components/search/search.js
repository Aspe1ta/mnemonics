import React from "react";
import "./search.scss";
import Header from "./../header/header.js";
import SearchTab from "./../info.js";
import { Link } from "react-router-dom";

import axios from "axios";


class Search extends React.Component {
  state = {
    Data: [], pull: []
  };

  componentDidMount() {
    this.setState({
      Data: SearchTab
    });

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=memorization%20song%20${this.props.q}&type=video&videoEmbeddable=true&key=AIzaSyDIxd8DaBiX6oVmzZKne2MCud8CU14Flq0`
      )
      .then(response => {
        if (this.state.pull !== response.data.items) {
          this.setState({
            pull: response.data.items
          });
        }
      });

  }

  render() {
    

    
    
    console.log(this.state.pull.id);

    console.log(this.state.pull.map(info => {
      return (info);
    }));

    return (
      <>
        <Header></Header>

        <div className="searchPage">
          <div className="qContain">
            <h1>{this.props.q}</h1>
          </div>
          <div className="resultContain">
            {this.state.pull.map(info => {
              return (
                <React.Fragment>
                  <Link to={"/" + info.id.videoId} key={info.id.videoId} className="searchCard">
                    <div className="cardThumb">
                      <img src={info.snippet.thumbnails.medium.url} className="cardImg" />
                    </div>
                    <div className="cardTextContain">
                      <h1>{info.snippet.title}</h1>
                    </div>
                    <div className="cardStats"></div>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
