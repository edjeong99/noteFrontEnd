import React from 'react';
import './App.css';

import { SideMenu } from './components/';
import DisplayNotesView from './viewer/DisplayNotesView';
import landingpageimg from './image/landing2.jpg';

const appStyles = () => {
  if (window.location.pathname === '/') {
    return {
      backgroundImage: `url(${landingpageimg})`,
      backgroundSize: 'cover'
    };
  } else {
    return {};
  }
};

const App = () => {
  return (
    <div className='App' style={appStyles()}>
      <SideMenu />
      <DisplayNotesView />
    </div>
  );
};

export default App;
