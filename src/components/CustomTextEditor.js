// src/components/CustomTextEditor.js
import React from 'react';

const CustomTextEditor = ({ value, onChange }) => {
  return (
    <div className="custom-text-editor">
      <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      <button onClick={() => console.log('SAVE clicked')}>SAVE</button>
      <button onClick={() => console.log('Variables clicked')}>Variables</button>
    </div>
  );
};

export default CustomTextEditor;
