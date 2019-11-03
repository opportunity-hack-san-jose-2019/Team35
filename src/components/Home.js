import React, {Component} from "react";
import "../static/css/Home.css";
// import flagBanner from "../static/images/flagBanner.png"
import HispanicChamber from "../static/images/HispanicChamber.png";
import BlackChamber from "../static/images/BlackChamber.png";
import VietnameseChamber from "../static/images/VietnameseChamber.png";
import FilipinoChamber from "../static/images/FilipinoChamber.png";
import ChineseChamber from "../static/images/ChineseChamber.png";


class Home extends Component {
    constructor() {
      super()
      this.state = {}
    }
    
    render() {

        return (
            <div className="container">

                <h1><u>Chamber Festival Events</u></h1>
                <p><b>We host a family friendly festival showcasing the best of each of our cultures through food, songs, tapestry and business.</b></p>
                <h5>SPECIAL THANKS TO OURS SPONSORS:</h5>
                <img className="logo" src={HispanicChamber} alt="" />
                <img className="logo" src={BlackChamber} alt="" />
                <img className="logo" src={VietnameseChamber} alt="" />
                <img className="logo" src={FilipinoChamber} alt="" />
                <img className="logo" src={ChineseChamber} alt="" />
                <h3>Below are our upcoming events!</h3>

                <div className="events">

                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div>

                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div>

                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div>

                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div>
 
                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div> 

                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div>
 
                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div>

                    <div className="event">

                        <p>[image]</p>
                        <h4>[TITLE]</h4>
                        <h5>[DATE]</h5>
                        <a href="/EventInfo"><button>Details</button></a>

                    </div>

                </div>

            </div>
        )
    }
}

export default Home;