import React, { Component } from 'react';
//import axios from 'axios';
//import gv from '../util/globalVariable';
import { Form, Button } from 'semantic-ui-react';
import { withFirebase } from './firebase';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../util/routes';

const initialUser = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const Register = () => (
  <div>
    <h3> Register </h3>
    <RegisterForm />
  </div>
);
class RegisterFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialUser };
  }

  // update the input field as user types
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;

    // submit signup info to firebase
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...initialUser });
        console.log(authUser);
        this.props.history.push(ROUTES.HOME); // change URL to homepage
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    // isInvalid check if required field is not empty and
    // password is confirmed by passwordTwo
    const isInvalid =
      this.state.email === '' ||
      this.state.passwordOne === '' ||
      this.state.passwordOne !== this.state.passwordTwo;

    return (
      <div className="login">
        <Form onSubmit={this.submitHandler}>
          <Form.Field>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
              style={{ marginBottom: '10px' }}
            />
          </Form.Field>
          <Form.Field>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </Form.Field>

          <Form.Field>
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </Form.Field>

          <Form.Field>
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Field>

          <Button
            disabled={isInvalid}
            type="submit"
            style={
              isInvalid
                ? {
                    background: 'grey',
                    color: 'white',
                  }
                : { background: 'green', color: 'white' }
            }
          >
            Sign Up
          </Button>

          {error && <p>{error.message}</p>}
        </Form>
      </div>
    );
  }
}

//withRouter is used to redirect the page after register is completed
// withFirebase let component use all firebase defined in 'firebase.js'
const RegisterForm = withRouter(withFirebase(RegisterFormBase));

export default Register;

export { RegisterForm };
