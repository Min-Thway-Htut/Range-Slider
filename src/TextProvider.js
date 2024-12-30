import React, { createContext, useState } from 'react';

// Create the context
export const TextContext = createContext();

// Context provider component
export function TextProvider({ children }) {
  const [text, setText] = useState('');
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
}
