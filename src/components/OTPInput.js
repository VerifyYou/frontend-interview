import React from 'react';
import { useOtp } from '../hooks/useOtp';

const OTPInput = ({ onComplete }) => {
  const { values, handleChange, handleKeyDown, handlePaste, setFocus } = useOtp(6, onComplete);
  // TODO: Implement OTP input logic (focus, value, change, etc.)
  return (
    <div className="otp-container">
      <h2>Enter the 6-digit code</h2>
      <div className="otp-fields">
        {[...Array(6)].map((_, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="otp-input"
            value={values[idx]}
            onChange={e => handleChange(idx, e.target.value)}
            onKeyDown={e => handleKeyDown(idx, e)}
            onPaste={handlePaste}
            onFocus={() => setFocus(idx)}
            // TODO: Add more logic as needed
            disabled
          />
        ))}
      </div>
      {/* TODO: Call onComplete(otp) when all fields are filled */}
    </div>
  );
};

export default OTPInput; 