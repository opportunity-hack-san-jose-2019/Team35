import React, {Component} from "react";
import "../static/css/Form2.css";
import firebase from '../config/firebaseConfig'
class Form2 extends Component {
state = {

    name : "",
    email: "",
    heardFrom : "",

}
handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value 
    })
    console.log(this.state)
}

handleSubmit = (e) => {
    e.preventDefault()
    this.registerAttendde(this.state.name, this.state.email, this.state.heardFrom)

}

registerAttendde = (name, email, heardFrom) => {

    firebase.firestore().collection('profiles').add({
        name : name,
        email : email,
        heardFrom : heardFrom
    })
}
    render () {
        return(
            <div class="container">
                <h1><u>Sign Up Form</u></h1>
                <form>
    
                    <input 
                        id= "name"
                        type="text"
                        placeholder="Full Name"
                        onChange={this.handleChange}
                    />
    
                    <input
                        id= "email"
                        type="text"
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <h3>How did you here about this event?</h3>

                    <input
                        id= "heardFrom"
                        type="text"
                        placeholder="QR, Email, Flyer, Other?"
                        onChange={this.handleChange}
                    />
    
                    <br/>
    
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )

    }
    
}

export default Form2;