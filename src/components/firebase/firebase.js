import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// config contains config info to be connected with firebase project
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  //measurementId:process.env.REACT_APP_MID
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    //instantiate the package from Firebase responsible for all the authentication
    this.auth = app.auth();
  }

  // define Firebase Auth API.  These APIs will be used in other component

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
