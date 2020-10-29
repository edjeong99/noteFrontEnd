import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Form, Button, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import { fetchNotes } from '../actions';
import ourColors from '../ColorScheme.js';
import gv from '../util/globalVariable';

const serverURL = gv.SERVER_PATH || 'http://localhost:9000/';
// const LOGIN_PATH = "auth/login";

// const cv = require('../util/globalVariable')

const initialUser = {
  username: '',
  password: ''
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
      error: null
    };
  }

  // this componentDidMount is to make testing easier
  // should be deleted for production

  componentDidMount() {
    axios
      .post(`${serverURL}${gv.LOGIN_PATH}`, {
        username: 'q',
        password: '1'
      })
      .then(res => {
        if (res.status === 200 && res.data) {
          // console.log('login.js res.data.token = ', res.data.token);

          localStorage.setItem('secret_token', res.data.token);

          this.props.handleLogin(res.data.userId);

          this.props.history.push('/Notes');
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          message: 'Authentication failed.',
          error: err
        });
      });
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  submitHandler = event => {
    event.preventDefault();

    // console.log('Login submitHandler process.env.SERVER_PATH =',    process.env.SERVER_PATH);
    axios
      .post(`${serverURL}${gv.LOGIN_PATH}`, this.state.user)
      .then(res => {
        if (res.status === 200 && res.data) {
          // console.log('login.js res.data.token = ', res.data.token);

          localStorage.setItem('secret_token', res.data.token);

          this.props.handleLogin(res.data.userId);

          this.props.history.push('/Notes');
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          message: 'Authentication failed.',
          error: err
        });
      });
  };

  goToRegisterPage = () => {
    this.props.history.push('/register');
  };
  render() {
    const isInvalid =
      this.state.user.password === '' || this.state.user.username === '';
    console.log('inInvalid = ', isInvalid);
    return (
      <div className='login'>
        <h3> Log In </h3>
        {/* {this.state.message ? <h4>{this.state.message}</h4> : undefined}
        <form onSubmit={this.submitHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            name='password'
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type='submit'>Submit</button>
        </form> */}

        <Form onSubmit={this.submitHandler}>
          <Form.Field>
            <input
              name='username'
              value={this.state.user.username}
              onChange={this.inputHandler}
              type='text'
              placeholder='username'
              style={{ marginBottom: '10px' }}
            />
          </Form.Field>
          <Form.Field>
            <input
              name='password'
              value={this.state.user.password}
              onChange={this.inputHandler}
              type='password'
              placeholder='Password'
            />
          </Form.Field>

          <Button
            disabled={isInvalid}
            type='submit'
            style={
              isInvalid
                ? {
                    background: ourColors.inactiveButtonColor,
                    color: 'white'
                  }
                : { background: ourColors.buttonColor, color: 'white' }
            }
          >
            Log In
          </Button>
          <p style={{ textAlign: 'center' }}>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>

          {this.state.error && (
            <p>
              {' '}
              Sorry, the credentials you entered do not match. Please try again.
            </p>
          )}
        </Form>

        {/* {resetPasswordComponent} */}
      </div>
    );
  }
}

export default Login;
