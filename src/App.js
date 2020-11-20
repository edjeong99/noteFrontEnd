import React from 'react';
import './App.css';

import { Landing, SideMenu } from './components/';
import DisplayNotesView from './viewer/DisplayNotesView';
import landingpageimg from './image/landing2.jpg';
import { AuthUserContext, withAuthentication } from './components/session';

const appStyles = () => {
  if (window.location.pathname === '/') {
    return {
      backgroundImage: `url(${landingpageimg})`,
      backgroundSize: 'cover',
    };
  } else {
    return {};
  }
};

const App = () => {
  console.log('APP');

  return (
    <div className="App" style={appStyles()}>
      <SideMenu />
      <DisplayNotesView />
    </div>
  );
};

export default withAuthentication(App);
