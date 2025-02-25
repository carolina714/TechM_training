import React from 'react';
import ReactDOM from 'react-dom/client';

function CheckDivisibility({ number }) {
  if (number % 13 === 0) {
    return <h1>The number {number} is divisible by 13!</h1>;
  } else {
    return <h1>The number {number} is not divisible by 13.</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckDivisibility number={26} />);
