import React, { useState } from 'react';

function App() {
  const [inputString, setInputString] = useState(''); 
  const [result, setResult] = useState('');

  const checkVowels = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowercasedString = inputString.toLowerCase(); 
    const containsVowel = vowels.some(vowel => lowercasedString.includes(vowel)); 
    const message = containsVowel
      ? 'The string contains at least one vowel.'
      : 'The string does not contain any vowels.';

    setResult(message); 
  };

  return (
    <div className="app">
      <h1>Check if the String Contains Vowels</h1>
      <input 
        type="text" 
        value={inputString} 
        onChange={(e) => setInputString(e.target.value)} 
        placeholder="Enter a string"
      />
      <button onClick={checkVowels}>Check Vowels</button>
      <div className="result">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
