import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
// import { connect } from 'react-redux';
import { RegisterLink } from './Register';
import { withFirebase } from './firebase';
import * as ROUTES from '../util/routes';

import { Form, Button, Header, Icon, Segment } from 'semantic-ui-react';
import ourColors from '../ColorScheme.js';

const Login = () => (
  <div>
    <h3>Log In</h3>
    <LoginForm />
    <RegisterLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };
  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="login">
        <Form onSubmit={this.submitHandler}>
          <Form.Field>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              style={{ marginBottom: '10px' }}
            />
          </Form.Field>
          <Form.Field>
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </Form.Field>

          <Button
            disabled={isInvalid}
            type="submit"
            style={
              isInvalid
                ? {
                    background: ourColors.inactiveButtonColor,
                    color: 'white',
                  }
                : { background: ourColors.buttonColor, color: 'white' }
            }
          >
            Log In
          </Button>

          {error && <p> {error.message} </p>}
        </Form>
      </div>
    );
  }
}
const LoginForm = compose(
  withRouter,
  withFirebase
)(LoginFormBase);

export default Login;
export { LoginForm };
