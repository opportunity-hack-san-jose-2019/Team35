import React, {Component} from "react";
import "../static/css/Form2.css";

class Form2 extends Component {
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
    
                    <br/>
                    <br/>
    
                    <h3>How did you here about this event?</h3>

                    <input
                        id= "email"
                        type="text"
                        placeholder="QR, Email, Flyer, Other?"
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

export default Form2;