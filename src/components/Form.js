import React from "react";
import "../css/Form.css";

function Form() {

    return(
        <div class="container">
            <h1><u>Sign Up Form</u></h1>
            <form>

                <input 
                    type="text"
                    placeholder="First Name"
                />

                <input
                    type="text"
                    placeholder="Last Name"
                />

                <input
                    type="text"
                    placeholder="Email"
                />

                <input
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
                    type="textbox"
                /> 

                <br/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;