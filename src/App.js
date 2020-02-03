import React from "react";
import "./App.css";
import Landing from "./components/landing/landing.js";
import Search from "./components/search/search.js";
import Main from "./components/main/main.js"

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  



  render() {

    

console.log(this.state);

    return (
      <Router>
        <Switch>
          <Route path={"/"} exact component={Landing}/>
          <Route path={"/:id"} exact component={Main}/>
        </Switch>
      </Router>
      
      
      
    );
  }
}

export default App;
