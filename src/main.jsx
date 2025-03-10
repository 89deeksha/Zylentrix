import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ub6d748ptyawtoug.us.auth0.com"
    clientId="cGSDpyYZoYqexQ17nK9ZRaLI1rolXT1j"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
 
)
