import React, {Component} from "react";
import "../static/css/Form.css";
import firebase from '../config/firebaseConfig'

class Form extends Component {
state = {
    name : "",
    email : "",
    phoneNumber : "",
    organization : "",
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
    this.registerDistributor(this.state.name, this.state.email, this.state.phoneNumber, this.state.organization, this.state.heardFrom)

}

registerDistributor = (name, email, phoneNumber, organization, heardFrom) => {
    firebase.firestore().collection('contributors').add({
        name : name,
        email : email,
        phoneNumber : phoneNumber,
        organization : organization,
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
    
                    <input
                        id= "phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                        onChange={this.handleChange}
                    />  
    
                    <h3>You are a/an:</h3>
    
                    <input
                        id= "organization"
                        type="text"
                        placeholder="Organizer, Food Vendor, Talent"
                        onChange={this.handleChange}
                    />
    
                    <br/>
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

export default Form;