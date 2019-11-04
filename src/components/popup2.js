import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form2 from "../components/Form2";

 

class Popup2 extends Component {

    state = {
        modalstate : false
    }

    showModal = () => {
        this.setState(
            {
                modalstate : true
            }
        )
    }

    closeModal = () => {
        this.setState(
            {
                modalstate : false
            }
        )
    }
    render() {
       
        return (
            <div>
            <Button onClick={this.showModal}>Attendees</Button>
            <Modal show={this.state.modalstate} >
            <Modal.Header closeButton onClick={this.closeModal}>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body> <Form2 /> </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.closeModal}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>
          </div>
        )
    }
}

export default Popup2;

