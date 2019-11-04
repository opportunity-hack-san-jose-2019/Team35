import React, {Component} from "react";
import Popup from "./popup";
import Popup2 from "./popup2";
import firebase from '../config/firebaseConfig';
import "../static/css/EventInfo.css";
import {Button} from 'react-bootstrap';
import {MapExample} from '../static/images/MapExample.jpg'
import PayPalButton from './paypallbutton'


class EventInfo extends Component {

    state = {
       events : []
    
    }

    getEvent = () => {
        firebase.firestore().collection('events').get().then((snapshot) => {
            snapshot.forEach(doc => {
                if (doc.id === this.props.match.params.eventid) {
                    this.setState({
                        events : doc.data()
                    })
                    

                }
            })
        })
        
    }
    componentWillMount = () => {
        this.getEvent()
     
    }

    render() {

        return (

            <div className="event-info">
                <a href="/">
                    <Button className="return-button" variant="warning">Go Back</Button> 
                </a>

                <h1><u>{this.state.events.eventName}</u></h1>
                <h5>{this.state.events.eventDescription}</h5>
                <h2>{this.state.events.date}</h2>
                <h4>{this.state.events.location}</h4>
                <img className="map-image" src={require('../static/images/MapExample.jpg')} alt="" />


                <Popup />
                <br />
                <br />
                <Popup2 />
                <br />
                <PayPalButton />

                
            </div>
        )
    }
}

export default EventInfo;