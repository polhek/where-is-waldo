import React from 'react';

const User = ({ setUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector('.user-login').classList.toggle('show');
    document.querySelector('.user-login').classList.toggle('hide');
  };
  return (
    <div className="user-login show">
      <div className="login-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>
            <h2>Username:</h2>
          </label>
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          ></input>
          <button type="submit">Start playing on submit!</button>
        </form>
      </div>
    </div>
  );
};

export default User;
