import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyAfWRGDdzZdk0HqbsH-JKBI7m4rxvfb-Sg",
  authDomain: "ninja-firestore-tut-a3785.firebaseapp.com",
  databaseURL: "https://ninja-firestore-tut-a3785.firebaseio.com",
  projectId: "ninja-firestore-tut-a3785",
  storageBucket: "ninja-firestore-tut-a3785.appspot.com",
  messagingSenderId: "875363438647",
  appId: "1:875363438647:web:db815d209148381b1aefb2",
  measurementId: "G-XSL44LT6ZH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

//export default firebase;
export { storage, firebase as default };

/* DB 'catismyfriend'
      autoID
      imgcol - url of the collection's image in storage
      imgname - name of the collection's image
      name - collection's name
*/
