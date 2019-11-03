import React, {Component} from 'react'
import firebase from '../config/firebaseConfig'


class Test extends Component {
    state = {
        name : "",
        phoneNumber : "012999999",

    }
    list = (name, email, description, heardFrom, phoneNumber) => {
       
        firebase.firestore().collection('profiles').add({
           name : name,
           email : email,
           description : description,
           heardFrom : heardFrom,
           phoneNumber : phoneNumber
        })
    }

    render() {
        
        return (
            <div>{this.list("Kito Mam", "kitomam@yahoo.com", "hello Kito", "QR Code", "40882999")}</div>
        )
    }



}

export default Test;