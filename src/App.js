import React, {Component} from 'react';
import './App.css';
// import Form from "./components/Form"
import EventInfo from "./components/EventInfo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <div className="container">

        <EventInfo />
        
        <Button className="attendee-button" variant="info">Attendee</Button>

      </div>      
    )
  }

}

export default App;
