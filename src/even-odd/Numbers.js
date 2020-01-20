import React from 'react';

const Numbers = ({ nums }) => {
  console.log(nums);
  return (
    <div>
      {nums.map(num => {
        return (
          <div className="card text-white bg-success mb-3" key={Math.random()}>
            <div className="card-body">
              <h5 className="card-title">{num}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Numbers;
