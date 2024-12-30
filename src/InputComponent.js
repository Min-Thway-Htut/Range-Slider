import React, { useContext } from 'react';
import { TextContext } from './TextProvider';

function InputComponent() {
  const { setText } = useContext(TextContext);
  return (
    <input
      type="text"
      placeholder="Type something..."
      onChange={(e) => setText(e.target.value)}
      style={{ padding: '8px', fontSize: '16px', marginBottom: '10px' }}
    />
  );
}

export default InputComponent;
