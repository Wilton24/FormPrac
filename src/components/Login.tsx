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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={(e: any) => inputBlur('email', e)}
          onInputChange={(e: any) => onInputChange('email', e.target.value)}
          inputIsValid={emailIsInvalid}
          value={credentials.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          onBlur={(e: any) => inputBlur('password', e)}
          onInputChange={(e: any) => onInputChange('password', e.target.value)}
          inputIsValid={false}
          value={credentials.password}
        />
      </div>

      <p className="form-actions">
        <button onClick={handleClearForm} className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
