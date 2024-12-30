import React, { useContext } from 'react';
import { TextContext } from './TextProvider';

function DisplayComponent() {
  const { text } = useContext(TextContext);
  return <h3>You typed: {text}</h3>;
}

export default DisplayComponent;
