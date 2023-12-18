import React, { useState } from 'react';
import './Loginsignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import toggle_light from '../Assets/night.png';
import toggle_dark from '../Assets/day.png';

const Loginsignup = () => {
  const [action, setAction] = useState('Sign Up');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`container ${isDarkTheme ? 'dark' : ''}`}>
      <img
        src={isDarkTheme ? toggle_light : toggle_dark}
        alt="Toggle Theme"
        className="toggle-icon"
        onClick={toggleTheme}
      />
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        <div className="inputs">
          {action === 'Login' ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="E-Mail" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          {action === 'Login' ? (
            <div className="forgot-password">
              forgot password? <span>Click here!</span>
            </div>
          ) : (
            <div></div>
          )}
          <div className="submitcontainer">
             <div
              className={action === 'Login' ? 'submit gray' : 'submit'}
              onClick={() => setAction('Sign Up')}
            >
              Sign Up
            </div>
            <div
              className={action === 'Sign Up' ? 'submit gray' : 'submit'}
              onClick={() => setAction('Login')}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
