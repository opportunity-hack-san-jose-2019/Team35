import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBtNTrHxCY9tqmk65vnpGpiSVgoIyYMoYM",
    authDomain: "hackathon-84a0c.firebaseapp.com",
    databaseURL: "https://hackathon-84a0c.firebaseio.com",
    projectId: "hackathon-84a0c",
    storageBucket: "hackathon-84a0c.appspot.com",
    messagingSenderId: "536212789477",
  };
  
  firebase.initializeApp(config);
  const storage = firebase.storage();
 

  export {
      storage, firebase as default
  }