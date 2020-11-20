import React from 'react';
import { AuthUserContext, withAuthentication } from '../components/session';

const authenticate = (props) => {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? true : false)}
    </AuthUserContext.Consumer>
  );
};
export default withAuthentication(authenticate);
