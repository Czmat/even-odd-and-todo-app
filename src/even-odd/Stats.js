import React from 'react';

const Stats = ({ nums }) => {
  console.log('test');
  const unique = nums.reduce((obj, num) => {
    if (obj[num]) {
      return obj;
    } else {
      obj[num] = num;
      return obj;
    }
  }, {});

  return (
    <div className="unique-div">
      <div>There is {Object.keys(unique).length} unique numbers</div>
    </div>
  );
};

export default Stats;
