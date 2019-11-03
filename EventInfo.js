import React, {Component} from "react";
import "../static/css/EventInfo.css";
import Popup from "./popup"
import Popup2 from "./popup2"


class EventInfo extends Component {
    constructor() {
      super()
      this.state = {}
    }
    
    render() {

        return (

            <div className="event-info">
                <h2>SAVE THE DATE!</h2>
                <h1><u>Silicon Valley heritage Festival</u></h1>
                <h5>A family friendly festival showcasing the best of each of our cultures through food, songs, tapestry and business.</h5>
                <h2>[DATE HERE]</h2>
                <h4>[ADDRESS HERE]</h4>
                <img className="map" src="map-example" alt="" />
                <Popup2 />
                <br></br>
                <Popup />
                
            </div>
        )
    }
}

export default EventInfo;