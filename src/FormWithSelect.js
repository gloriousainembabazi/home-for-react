// src/FormWithSelect.js
import React, { useState } from 'react';

const FormWithSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormWithSelect; 