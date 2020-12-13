import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from './firebase';
import * as ROUTES from '../util/routes';

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.props.firebase.doSignOut();
    localStorage.removeItem('secret_token');
    this.props.history.push(ROUTES.LANDING);
    console.log('LOGOUT COMPLETE');
  };

  render() {
    return (
      <button type="button" onClick={this.submitHandler}>
        Log Out
      </button>
    );
  }
}
export default compose(
  withRouter,
  withFirebase
)(Logout);
// import React from 'react';
// import { withFirebase } from './firebase';

// const Logout = ({ firebase }) => (
//   <button type="button" onClick={firebase.doSignOut}>
//     Log Out
//   </button>
// );

// export default withFirebase(Logout);
