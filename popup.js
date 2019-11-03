import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "../components/Form";

 

class Popup extends Component {

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
            <Button onClick={this.showModal}>Contributors</Button>
            <Modal show={this.state.modalstate} >
            <Modal.Header closeButton onClick={this.closeModal}>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body> <Form /> </Modal.Body>
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

export default Popup;