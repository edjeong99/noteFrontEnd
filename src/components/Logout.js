import React from 'react';
import { withFirebase } from './firebase';

const Logout = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Log Out
  </button>
);

export default withFirebase(Logout);
