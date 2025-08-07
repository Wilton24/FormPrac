import React, { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState<{ email: string | null; password: string | null }>({ email: null, password: null });

  function onInputChange(identifier: string, value: React.ChangeEvent<HTMLInputElement>) {
    setCredentials(prevState => ({
      ...prevState,
      [identifier]: value
    }));
  };

  const emailIsInvalid = credentials.email !== null && credentials.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email);


  function handleClearForm(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCredentials({ email: null, password: null });
    console.log('Form cleared');
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Form submitted with:', credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onChange={(e: any) => onInputChange('email', e.target.value)} id="email" type="email" name="email" value={credentials.email || ''} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onChange={(e: any) => onInputChange('password', e.target.value)} id="password" type="password" name="password" value={credentials.password || ''} />
        </div>
      </div>

      <p className="form-actions">
        <button onClick={handleClearForm} className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
