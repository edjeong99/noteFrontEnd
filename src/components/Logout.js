import React from 'react';

export default function Logout(props) {
  localStorage.removeItem('secret_token');

  // if removing is successful, go to landing page
  if (!localStorage.getItem('secret_token')) {
    props.history.push('/');
  }
  return (
    <div>
      <h4>{'Logout Failed'}</h4>
    </div>
  );
}
