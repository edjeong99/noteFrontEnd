import React, { Component } from 'react';
import axios from 'axios';
import gv from '../util/globalVariable';
import { Form, Button } from 'semantic-ui-react';

const serverURL = gv.SERVER_PATH || 'http://localhost:9000/';

const initialUser = {
  username: '',
  password: ''
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    let registeringUser = {
      username: this.state.username,
      password: this.state.password
    };
    console.log('in Register.js  registeringUser = ', registeringUser);
    console.log('in Register.js  path = ', `${serverURL}${gv.REGISTER_PATH}`);

    axios
      .post(`${serverURL}${gv.REGISTER_PATH}`, registeringUser)
      .then(res => {
        console.log('Register.js  res.userId = ', res.data.userId);
        if (res.status === 200) {
          this.setState({
            message: 'Registration successful',
            user: { ...initialUser }
          });

          // console.log('in Register.js SUCCESS`);
          localStorage.setItem('secret_token', res.data.token);
          this.props.handleLogin(res.data.userId);

          this.props.history.push('/');
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        console.log('in Register.js  err = ', err);

        this.setState({
          message: 'Registration failed.',
          user: { ...initialUser }
        });
      });
  };

  render() {
    const { username, password } = this.state;
    const isInvalid = password === '' || username === '';

    return (
      <div className='login'>
        <h3> Register </h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Field>
            <input
              name='username'
              value={username}
              onChange={this.onChange}
              type='text'
              placeholder='username'
              style={{ marginBottom: '10px' }}
            />
          </Form.Field>

          {/* <Form.Field>
            <input
              name='username'
              value={username}
              onChange={this.onChange}
              type='username'
              placeholder='username'
            />
          </Form.Field> */}
          <Form.Field>
            <input
              name='password'
              value={password}
              onChange={this.onChange}
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
                    background: 'grey',
                    color: 'white'
                  }
                : { background: 'green', color: 'white' }
            }
          >
            Sign In
          </Button>
          {/* <label htmlFor='username'>Username</label>
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
          <button type='submit'>Submit</button>*/}
        </Form>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}
