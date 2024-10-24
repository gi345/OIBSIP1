// src/components/AuthPage.jsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { gsap } from 'gsap';

function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    gsap.to('.form-container', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setShowLogin(!showLogin);
        gsap.to('.form-container', { opacity: 1, duration: 0.5 });
      },
    });
  };

  return (
    <div className="form-container max-w-md mx-auto p-8 shadow-md rounded bg-white">
      {showLogin ? <LoginForm /> : <RegisterForm />}
      <button
        onClick={toggleForm}
        className="text-blue-500 mt-4 hover:underline"
      >
        {showLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
      </button>
    </div>
  );
}

export default AuthPage;
