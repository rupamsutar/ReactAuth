import React, { useRef, useContext } from 'react';

import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newPassword = newPasswordInputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCDSTk6QekMkRc3ppVcPF5-kR2NXXLghdY',
    {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
