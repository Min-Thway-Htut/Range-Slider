import React from 'react';
import { TextProvider } from './TextProvider';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

function App() {
  return (
    <TextProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>useContext Example</h1>
        <InputComponent />
        <DisplayComponent />
      </div>
    </TextProvider>
  );
}

export default App;

