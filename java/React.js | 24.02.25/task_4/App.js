import React from 'react';
import Animal from './Animal'; // Import the Animal component

function App() {
  return (
    <div className="App">
      <Animal name="Lion" type="Mammal" /> 
      <Animal name="Eagle" type="Bird" />
    </div>
  );
}

export default App;
