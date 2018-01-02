import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { login, signup } from './actions/session_actions';
window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Hair BnB</h1>, root);
});
