import React from "react";
import "./App.css";
import Landing from "./components/landing/landing.js";
import Main from "./components/main/main.js";
import Intro from "./components/intro/intro.js";
import API from "./components/info.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Parent from "./components/parent/parent";
import axios from "axios";

import Login from "./components/login/login.js";
import Signup from "./components/signup/signup.js";
import Verified from "./components/verified/verified.js";
// import StudyGroup from "./components/studyGroup/studyGroup.js";
// import Kin201 from "./components/kin201/kin201.js";
// import Construction from "./components/construction/construction.js";
// import Saved from "./components/saved/saved";

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
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=memorize%20${e.replace(" ", "%20")}&type=video&videoEmbeddable=true&key=${API}`
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
              <Intro
                {...props}
              />
            )}
          />
          <Route
            path={"/search"}
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
          <Route path={"/video/:id"} render={props => (
              <Main
                {...props}
                query={this.state.query.replace(" ", "%20")}
                pull={this.state.pull}
              />
            )} />

          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={Signup} />
          <Route path="/verified" exact component={Verified} />
          {/* <Route path="/studyGroups" exact component={StudyGroup} />
          <Route path="/kin201" exact component={Kin201} />
          <Route path="/saved" exact component={Saved} />
          <Route path="/notBuilt" exact component={Construction} /> */}

        </Switch>
      </Router>
    );
  }
}

export default App;
