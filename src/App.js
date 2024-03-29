import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import EventInfo from "./components/EventInfo"
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <div className="body-container">
    
        <Router>

          <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/eventinfo/:eventid" exact component = {EventInfo} />
            <Route path="/Form" exact component = {Form} />
          </Switch>

        </Router>

      </div>
    )
  }

}

export default App;
