import React, {Component} from "react";
import "../static/css/Home.css";
// import flagBanner from "../static/images/flagBanner.png"
import HispanicChamber from "../static/images/HispanicChamber.png";
import BlackChamber from "../static/images/BlackChamber.png";
import VietnameseChamber from "../static/images/VietnameseChamber.png";
import FilipinoChamber from "../static/images/FilipinoChamber.png";
import ChineseChamber from "../static/images/ChineseChamber.png";
import firebase from '../config/firebaseConfig'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';


class Home extends Component {
    state = {
        eventNames : [],
        eventName : "",
        eventDescription : "",
        date : "",
        location : "",
        file : "",
        modalShow : false,
        uploading : false,
        csvData : [
            {
                "email" : "richard",
                "name" : "richard"
            } ,
            {
                "email" : "richard",
                "name" : "richard"
            } 
        ]
    }


    listAllEvents = () => {
        firebase.firestore().collection("events").get().then((snapshot) => {
            snapshot.forEach(doc => {
               this.setState({
                   eventNames : [...this.state.eventNames, doc.data()]
               })
               
            })
        })

    }

    componentWillMount = () => {
        this.listAllEvents()

       
    }
    componentDidMount = () => {
        setTimeout(function() { //Start the timer
           console.log(this.state.eventNames)
        }.bind(this), 5000)
    }
    render() {
       
       
        return (
        <div className="container">
            <div className="landing-page">
                 <h1><u>Chamber Festival Events</u></h1>
                 <p><b>We host a family friendly festival showcasing the best of each of our cultures through food, songs, tapestry and business.</b></p>
                 <h5>SPECIAL THANKS TO OURS SPONSORS:</h5>
                 <img className="logo" src={HispanicChamber} alt="" />
                 <img className="logo" src={BlackChamber} alt="" />
                 <img className="logo" src={VietnameseChamber} alt="" />
                 <img className="logo" src={FilipinoChamber} alt="" />
                 <img className="logo" src={ChineseChamber} alt="" />
                 <h3>Below are our upcoming events!</h3>
                 </div>
            <div className="events">
                {this.state.eventNames.map((event) => {
                    return (                       


                                <div className="event">

                                    <img className="event-image" src={event.url} alt="" />
                                    <h4>{event.eventName}</h4>
                                    <h5>{event.date}</h5>                                
                                    <Link to={'/eventinfo/' + event.eventID} > 
                                        <a href="/EventInfo">
                                            <Button className="detail-button" variant="warning">Event Info</Button> 
                                        </a>
                                    </Link>
                                    

                                </div>


                    )
                

             })}
             </div>

        </div>
        )

        
    }
}

export default Home;