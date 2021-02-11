import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import ourColors from '../ColorScheme.js';
import * as ROUTES from '../util/routes';
import { Button, Header, Responsive } from 'semantic-ui-react';
import { RegisterLink } from './Register';
// import { url } from 'inspector';
import landingpageimg from '../image/landing2.jpg';

const LandingDiv = styled.div`
  width: 90%;
  background-image: url('landing2.jpg');
  margin-top: 10%;

  //background-size: cover;
  p {
    margin: 0 0 15px 45%;
    padding: 10px 0 10px 10px;
    max-width: 500px;
    text-align: left;
    line-height: 1.5;
    font-size: 2rem;
  }

  @media (max-width: 1440px) {
    p {
      margin: 0 0 15px 40%;
    }
  }
  @media (max-width: 1240px) {
    p {
      margin: 0 0 15px 32%;
    }
  }
  @media (max-width: 1024px) {
    p {
      margin: 0 30px 15px 30%;
    }
  }
  @media (max-width: 780px) {
    p {
      margin: 0 15px 15px 40%;
      border-radius: 15px;
    }
  }
`;

const LandingPage = (props) => {
  console.log('LandingPage userID = ', props.userId);
  const headerStyles1 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontSize: '7rem',
      fontWeight: 'normal',
      margin: '75px auto 30px auto',
      background: 'rgba(255,255,255,0.7)',
      width: '50%',
    };
  };
  const headerStyles2 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontSize: '6rem',
      fontWeight: 'normal',
      margin: '75px auto 30px auto',
      background: 'rgba(255,255,255,0.7)',
      width: '50%',
    };
  };
  const headerStyles21 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontSize: '5rem',
      fontWeight: 'normal',
      margin: '50px 30px 30px 30px',
      background: 'rgba(255,255,255,0.7)',
    };
  };
  const headerStyles3 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '5rem',
      margin: '0 0 30px 0',

      background: 'rgba(255,255,255,0.7)',
      borderRadius: '15px',
    };
  };
  const headerStyles4 = () => {
    return {
      fontFamily: `Montserrat`,
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '5rem',
      margin: '0 10% 30px 10%',
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '15px',
    };
  };
  return (
    <LandingDiv style={{ height: '85vh' }}>
      <Responsive minWidth={1240}>
        <Header as="h1" style={headerStyles1()}>
          SMART
          <br />
          NOTES
        </Header>
        <p
          style={{
            fontFamily: 'Roboto',
            background: '#EFF3F4',
            margin: 'auto',
          }}
        >
          Do you have trouble remembering? This note app is for you!
        </p>
        <Button
          onClick={(e) => props.history.push(ROUTES.SIGN_IN)}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            marginLeft: '25%',
            fontSize: '1.5rem',
            width: '50%',
            margin: '20px auto',
            display: 'block',
          }}
        >
          Login
        </Button>
      </Responsive>
      <Responsive minWidth={950} maxWidth={1239}>
        <Header as="h1" style={headerStyles2()}>
          SMART
          <br />
          NOTES
        </Header>
        <p
          style={{
            fontFamily: 'Roboto',
            background: '#EFF3F4',
            margin: 'auto',
          }}
        >
          Do you have trouble remembering? This note app is for you!
        </p>
        <Button
          onClick={(e) => props.history.push(ROUTES.SIGN_IN)}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            fontSize: '1.5rem',
            width: '50%',
            margin: '20px auto',
            display: 'block',
          }}
        >
          Login
        </Button>
      </Responsive>
      <Responsive minWidth={781} maxWidth={949}>
        <Header as="h1" style={headerStyles21()}>
          SMART
          <br />
          NOTES
        </Header>
        <p
          style={{
            fontFamily: 'Roboto',
            background: '#EFF3F4',
            margin: 'auto',
          }}
        >
          Do you have trouble remembering? This note app is for you!
        </p>
        <Button
          onClick={(e) => props.history.push(ROUTES.SIGN_IN)}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            marginLeft: '22%',
            fontSize: '1.5rem',
            width: '50%',
            margin: '20px auto',
            display: 'block',
          }}
        >
          Login
        </Button>
      </Responsive>
      <Responsive minWidth={501} maxWidth={780}>
        <Header as="h1" style={headerStyles3()}>
          SMART
          <br />
          NOTES
        </Header>
        <p
          style={{
            fontFamily: 'Roboto',
            background: '#EFF3F4',
            margin: 'auto',
          }}
        >
          Do you have trouble remembering? This note app is for you!
        </p>
        <Button
          onClick={(e) => props.history.push(ROUTES.SIGN_IN)}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            fontSize: '1.5rem',
            width: '50%',
            margin: '20px auto',
            display: 'block',
          }}
        >
          Login
        </Button>
      </Responsive>
      <Responsive maxWidth={500}>
        <Header as="h1" style={headerStyles4()}>
          SMART
          <br />
          NOTES
        </Header>
        <Button
          onClick={(e) => props.history.push(ROUTES.SIGN_IN)}
          style={{
            background: ourColors.buttonColor,
            color: 'white',
            margin: '0 auto',
            boxShadow: '0 0 20px white',
            border: '1px solid white',
            width: '50%',
            margin: 'auto',
            display: 'block',
          }}
        >
          Login
        </Button>
      </Responsive>
      <RegisterLink />
    </LandingDiv>
  );
};

const Landing = (args) => (
  <Route
    {...args}
    render={(props) =>
      // Redirect to the Note List page if the user is logged in; otherwise display the nested Landing component defined above.

      localStorage.secret_token ? ( //props.userId  was used before but value was always null
        <Redirect
          to={{
            pathname: '/Notes',
            state: { from: props.location },
          }}
        />
      ) : (
        <LandingPage {...props} />
      )
    }
  />
);
const mapStateToProps = ({ userId }) => {
  return { userId };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Landing)
);
