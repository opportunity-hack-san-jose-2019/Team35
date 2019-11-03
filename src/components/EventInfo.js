import React from "react";
import "../css/EventInfo.css";

function EventInfo() {
    return(
        <div className="event-info">
          <h2>SAVE THE DATE!</h2>
          <h1><u>Silicon Valley heritage Festival</u></h1>
          <h5>A family friendly festival showcasing the best of each of our cultures through food, songs, tapestry and business.</h5>
          <h2>[DATE HERE]</h2>
          <h4>[ADDRESS HERE]</h4>
          <img src="./images/map-example.png" alt="" />
        </div>
    )
}

export default EventInfo;