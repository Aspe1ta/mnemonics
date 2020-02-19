import React from "react";
import "./App.css";
import Landing from "./components/landing/landing.js";
import Main from "./components/main/main.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Parent from "./components/parent/parent";
import axios from "axios";

class App extends React.Component {
  state = { query: "", mode: "land", update: 0, pull: [] };

  callbackFunction = event => {
    
    event.preventDefault();

    this.setState({
      query: event.target.search.value,
      mode: "search",
      update: this.state.update + 1
    });
    this.pullRequest(event.target.search.value);

    console.log(this.state);
  };

  pullRequest(e) {
    console.log("running");
    



    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=memorize%20${e.replace(" ", "%20")}&type=video&videoEmbeddable=true&key=AIzaSyDIxd8DaBiX6oVmzZKne2MCud8CU14Flq0`
      )
      .then(response => {
        if (this.state.query == e) {
          this.setState({
            pull: response.data.items
          });
        }
      });

    this.setState({ Data: this.props.info });
  }

  render() {
    console.log(this.state);

    return (
      <Router>
        <Switch>
          <Route
            path={"/"}
            exact
            render={props => (
              <Parent
                {...props}
                call={this.callbackFunction}
                mode={this.state.mode}
                query={this.state.query.replace(" ", "%20")}
                pull={this.state.pull}
              />
            )}
          />
          <Route path={"/:id"} render={props => (
              <Main
                {...props}
                query={this.state.query.replace(" ", "%20")}
                pull={this.state.pull}
              />
            )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
