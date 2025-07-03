# VerifyYou Frontend Interview Playground

This is a simple React project for a frontend interview exercise. The main focus is on building an OTP (One-Time Password) input component.

## Project Structure

```
src/
  App.js              # Main app component
  index.js            # Entry point
  index.css           # Global styles
  components/
    OTPInput.js       # OTP input UI component
  hooks/
    useOtp.js         # Custom hook for OTP logic (to be implemented)
public/
  index.html          # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Run tests (if any):**
   ```bash
   npm test
   ```

## General TODOs

The core OTP functionality is scaffolded but not yet implemented. Here are the main tasks:

- [ ] **Implement OTP state management** in `useOtp.js` (store values, handle changes, etc.)
- [ ] **Focus management** for OTP fields (auto-advance, backspace, etc.)
- [ ] **Input change handler** for each OTP digit
- [ ] **Backspace/delete handler** for navigation and clearing
- [ ] **Paste handler** to allow pasting the full OTP
- [ ] **Call `onComplete`** when all OTP fields are filled
- [ ] **Wire up OTPInput.js** to use the above logic and remove the `disabled` attribute from inputs
- [ ] **Add any additional UI/UX improvements** (e.g., error states, loading, accessibility)

 