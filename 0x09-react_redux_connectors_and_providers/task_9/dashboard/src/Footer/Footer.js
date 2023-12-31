import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import {AppContext} from '../App/AppContext';

const Footer = () => {
  const { user } = AppContext;
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      { user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
    </div>
  )
}

login: loginRequest,
  logout,