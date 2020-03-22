import React from "react";
import "./search.scss";
import Header from "./../header/header.js";
import SearchTab from "./../info.js";
import { Link } from "react-router-dom";



class Search extends React.Component {
  state = {
    Data: "",
    pull: []
  };




  render() {

    console.log(this.state.pull)

    return (
      <>
        <Header call={this.props.call}></Header>

        <div className="searchPage">
          <div className="qContain">
            <h1>{this.props.q}</h1>
          </div>
          <div className="resultContain">
            {this.props.pull.map(info => {
              return (
                <React.Fragment>
                  <Link
                    to={"/video/" + info.id.videoId}
                    key={info.id.videoId}
                    className="searchCard"
                  >
                    <div className="cardThumb">
                      <img
                        src={info.snippet.thumbnails.medium.url}
                        className="cardImg"
                      />
                    </div>
                    
                    <div className="cardTextContain">
                      <h3 className="cardText">{info.snippet.title}</h3>
                      <div className="ByContain">
                        <h3 className="By">By:</h3>
                        <h4 className="channelName">{info.snippet.channelTitle}</h4>
                      </div>
                      
                    </div>
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
