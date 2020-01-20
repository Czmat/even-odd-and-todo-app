import React, { useState } from 'react';
import Numbers from './Numbers';
import Stats from './Stats';

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const findEvenNumber = num => {
  if (num % 2 === 0) {
    return num;
  } else {
    return num + 1;
  }
};

const EventOddApp = () => {
  const [nums, setNums] = useState([]);
  const [checked, setChecked] = useState(false);

  const generateNumbers = () => {
    let numbers = [
      ...nums,
      checked ? findEvenNumber(generateRandomNumber()) : generateRandomNumber(),
    ];

    setNums(numbers);
  };

  return (
    <div className="container">
      <h1>Generate Even or Odd Numbers ({nums.length})</h1>
      <Stats nums={nums} />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
          onChange={e => setChecked(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Only Even Numbers!
        </label>
      </div>
      <button onClick={generateNumbers}>Add Number</button>
      <Numbers nums={nums} />
    </div>
  );
};

export default EventOddApp;
