import React from "react";
import "./App.css";
import Landing from "./components/landing/landing.js";
import Main from "./components/main/main.js"

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Parent from "./components/parent/parent";

class App extends React.Component {

  state = { query: "", mode: "land", update: 0};

    

    callbackFunction = event => {
      console.log(event.target.search.value);
      event.preventDefault();
      
      this.setState({ query: event.target.search.value, mode: "search", update: this.state.update + 1});

      
      console.log(this.state);
    };
  

    render() {

      

    

console.log(this.state);



    return (
      <Router>
        <Switch>
          <Route path={"/"} exact render={(props) => <Parent {...props} call={this.callbackFunction} mode={this.state.mode} query={this.state.query.replace(" ", "%20")} />} />
          <Route path={"/:id"} component={Main}/>
        </Switch>
      </Router>
      
      
      
    );

    
  }
}

export default App;
