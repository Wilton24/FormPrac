import React, { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Login form submitted');
  };

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  };

  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  };

  function handleClearForm(event: React.MouseEvent<HTMLButtonElement>) {
    setEmail("");
    event.preventDefault();
    setPassword("");
    console.log('Form cleared');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onChange={onEmailChange} id="email" type="email" name="email" value={email || ''} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onChange={onPasswordChange} id="password" type="password" name="password" value={password || ''} />
        </div>
      </div>

      <p className="form-actions">
        <button onClick={handleClearForm} className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
