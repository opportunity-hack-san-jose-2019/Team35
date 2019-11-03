import React, {Component} from "react";
import "../css/Form.css";

class Form extends Component {
state = {
    date : "",
    email : "",
    phoneNumber : "",
    heardFrom : "",
    description : ""
}
handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value 
    })
    console.log(this.state)
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
                    />
    
                    <input
                        id= "email"
                        type="text"
                        placeholder="Email"
                    />
    
                    <input
                        id= "phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                    />  
    
                    <h3>You are a/an:</h3>
    
                    <p>Organization</p>
                    <input 
                        type="checkbox"
                    /> 
    
                    <p>Food Vendor</p>
                    <input 
                        type="checkbox"
                    /> 
    
                    <p>Talent</p>
                    <input 
                        type="checkbox"
                    /> 
    
                    <p>Volunteer</p>
                    <input 
                        type="checkbox"
                    /> 
    
                    <br/>
                    <br/>
    
                    <h3>How did you here about us?</h3>
    
                    <p>QR</p>
                    <input 
                    type="radio"
                    /> 
                    <p>Email</p>
                    <input 
                    type="radio"
                    /> 
                    <p>Flyer</p>
                    <input 
                    type="radio"
                    /> 
                    <p>Other</p>
                    <input 
                    type="radio"
                    /> 
    
                    <br/>
    
                    <p>Description:</p>
                    <input 
                        id="descriptions"
                        type="textbox"
                    /> 
    
                    <br/>
    
                    <button onClick="">Submit</button>
                </form>
            </div>
        )

    }
    
}

export default Form;