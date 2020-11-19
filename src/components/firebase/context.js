import React from 'react';

const FirebaseContext = React.createContext(null);

// create higher function, so it's eaiser to use in component.
export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
