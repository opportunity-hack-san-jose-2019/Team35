import React, {Component} from 'react'
import firebase from '../config/firebaseConfig'
import {Button, Spinner, Modal, Card, Form, ButtonToolbar, Dropdown} from 'react-bootstrap'

class AdminTest extends Component {
    state = {
        eventNames : [],
        eventName : "",
        eventDescription : "",
        date : "",
        location : "",
        file : "",
        modalShow : false,
        uploading : false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]  : e.target.value
        })
        console.log(this.state)
    } 
    handleInput = (e) => {
        const file = e.target.files[0]    
       this.setState({
           file : file
       })    
    }   
    handleSubmit = (e) => {
        e.preventDefault()
        this.createEvent(this.state.date, this.state.eventDescription, this.state.eventName, this.state.location, this.state.file)

        this.setState({
            uploading : true
        })
        
    }
    handleEdit = (eventID) => {
        this.editEvent(eventID, this.state.date, this.state.eventDescription, this.state.eventName, this.state.location)
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

    createEvent = (date, eventDescription, eventName, location, file) => {
        let fileName = file.name + Math.random()
        const imgToUpload = firebase.storage().ref('team35Images/' + fileName)
        imgToUpload.put(file).then(() => {
            firebase.storage().ref('team35Images/' + fileName).getDownloadURL().then((e) => {
                firebase.firestore().collection("events").add({
                    date : date,
                    eventDescription : eventDescription,
                    eventName : eventName,
                    location : location
                }).then((res) => {
                    firebase.firestore().collection('events').doc(res.id).update({
                        url : e,
                        urlFileName : fileName,
                        eventID : res.id
                    })
                    this.setState({
                        uploading : false
                    })
                })
            })
        })

        
    }

    

    deleteEvent = (eventID) => {
       firebase.firestore().collection("events").doc(eventID).delete()
    }

    editEvent = (eventID, date, eventDescription, eventName, location ) => {
        firebase.firestore().collection("events").doc(eventID).update({
            date : date,
            eventDescription : eventDescription,
            eventName : eventName,
            location : location

        })
    }
    showModal = () => {     
            this.setState({
                modalShow : true
            })
    }
    closeModal = () => {
        this.setState({
            modalShow : false
        })
    }

    componentWillMount = () => {
        this.listAllEvents()
    }
    
    render () {
        return (
            <div>
            <div className="container">
                {console.log(this.state.eventNames.date)}
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Create Event
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className="container">
                                <label htmlFor="cardTitle">Event name</label>
                                <input type="text" id="eventName" onChange={this.handleChange}/>
                                <br/>
                                <label htmlFor="cardContent"> Description</label>
                                <input type="text" id="eventDescription" onChange={this.handleChange} />
                                <label htmlFor="cardTitle">Date</label>
                                <input type="text" id="date" onChange={this.handleChange}/>
                                <br/>
                                <label htmlFor="cardContent"> Location</label>
                                <input type="text" id="location" onChange={this.handleChange} />
                                <button onClick={this.handleSubmit}> Submit</button>
                                {this.state.uploading &&   <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                                </Spinner>}
                    </div>
                    <div className="container"> 
                                <label>Upload picture</label>
                                <input type="file" onChange={this.handleInput} />
                    </div>

                                
         
                </Dropdown.Menu>
                </Dropdown>


            </div>
                {this.state.eventNames.map((event) => {
                    return (
                        <div className="container">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={event.url} />
                        <Card.Body>
                            <Card.Title>Title : {event.eventName}</Card.Title>
                            <Card.Text>
                                        Description : {event.eventDescription}
                            </Card.Text>
                            <label>location: {event.location}</label>
                            
                        </Card.Body>
                        </Card>
                        <Button variant="danger" onClick={ () => {this.deleteEvent(event.eventID)}}>Delete</Button> 
                        <Button variant="success" onClick={this.showModal}>Edit</Button>
                            <Modal show={this.state.modalShow} >
                                <Modal.Header closeButton onClick={this.closeModal}>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <label htmlFor="cardTitle">Event name</label>
                                    <input type="text" id="eventName" onChange={this.handleChange}/>
                                    <br/>
                                    <label htmlFor="cardContent"> Description</label>
                                    <input type="text" id="eventDescription" onChange={this.handleChange} />
                                    <label htmlFor="cardTitle">Date</label>
                                    <input type="text" id="date" onChange={this.handleChange}/>
                                    <br/>
                                    <label htmlFor="cardContent"> Location</label>
                                    <input type="text" id="location" onChange={this.handleChange} />
                                
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick ={this.closeModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={ () => {this.handleEdit(event.eventID)}} >
                                    Save Changes
                                </Button>
                              
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )
                })}

                
               
            </div>
        )
    }


}

export default AdminTest;