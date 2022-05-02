import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
  <Auth0Provider
  domain="dev-nnwt9fkx.us.auth0.com"
  clientId="d4gURZwCe2Y0wUPzNnbaTRSF2teVU4Cp"
  redirectUri={window.location.origin}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

var cors = require('cors')

App.use(cors()) // Use this after the variable declaration

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
