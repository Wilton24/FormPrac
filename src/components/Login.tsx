import React, { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [credentials, setCredentials] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const [didEdit, setDidEdit] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });

  function onInputChange(identifier: string, value: React.ChangeEvent<HTMLInputElement> | any) {
    setCredentials(prevState => ({
      ...prevState,
      [identifier]: value
    }));
    setDidEdit(prevState => ({
      ...prevState,
      [identifier]: false
    }));
  };

  // Simple email validation regex
  // const emailIsInvalid = credentials.email !== null && credentials.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email);
  const emailIsInvalid = didEdit.email && !credentials.email.includes('@');

  // inputBlur function to handle input blur events
  function inputBlur(identifier: any, event: React.FocusEvent<HTMLInputElement>) {
    setDidEdit(prevState => ({
      ...prevState,
      [identifier]: true
    }));
  };

  function handleClearForm(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setCredentials({ email: '', password: '' });
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
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onChange={(e: any) => onInputChange('email', e.target.value)}
            id="email"
            type="email"
            name="email"
            value={credentials.email || ''}
            onBlur={(e) => inputBlur('email', e)} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div> */}
        <Input
          label="Email"
          type="email"
          value={credentials.email}
          onBlur={(e) => inputBlur('email', e)}
          onInputChange={(identifier: string, value: string) => onInputChange(identifier, value)}
          inputIsValid={emailIsInvalid}
        />


        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onChange={(e: any) => onInputChange('password', e.target.value)} id="password" type="password" name="password" value={credentials.password || ''} />
        </div> */}
        <Input
          label="Password"
          type="password"
          value={credentials.password}
          onBlur={(e) => inputBlur('password', e)}
          onInputChange={(identifier: string, value: string) => onInputChange(identifier, value)}
          inputIsValid={false} // Assuming no validation for password in this example
        />
      </div>

      <p className="form-actions">
        <button onClick={handleClearForm} className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
