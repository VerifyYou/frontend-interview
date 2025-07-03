import React from 'react';
import OTPInput from './components/OTPInput.js';

const App = () => {
  const handleOTPComplete = (otp) => {
    // Placeholder for OTP complete callback
    alert(`OTP Entered: ${otp}`);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>VerifyYou Frontend Interview Playground</h1>
      </header>
      <main className="app-main">
        <OTPInput onComplete={handleOTPComplete} />
      </main>
      <footer className="app-footer">
        <small>&copy; {new Date().getFullYear()} VerifyYou</small>
      </footer>
    </div>
  );
};

export default App; 