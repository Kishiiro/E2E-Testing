"use client";

import { useState } from 'react';
import { FormEvent } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Simulate a login request
    if (email === "test@gmail.com" && password === "pass1234") {
      window.location.href = "/";
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleLogin} className='flex flex-col gap-3 text-white'>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='p-3'
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='p-3'
      />
      <button type="submit" className='bg-blue-500 p-3 w-fit mx-auto'>Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    </div>
  );
}