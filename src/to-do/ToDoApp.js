import React, { useState } from 'react';
import ToDoList from './ToDoList';

const randomNum = () => {
  return Math.floor(Math.random() * 1000);
};
const ToDoApp = () => {
  const [word, setWord] = useState({
    text: '',
    isCrossedOff: false,
  });
  const [displayList, setDisplayList] = useState([]);

  const handleChange = e => {
    let value = e.target.value;

    const change = {};
    change[e.target.name] = value;
    change.id = randomNum();
    change.hide = false;
    setWord({ ...word, ...change });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const list = [...displayList, word];

    setDisplayList(list);
    setWord({
      text: '',
      isCrossedOff: false,
    });
  };
  const toggleHideShowBtn = e => {
    e.preventDefault();
    const hide = displayList.map(word => {
      if (word.isCrossedOff) {
        word.hide = !word.hide;
        console.log('hide', word);
        myFunction();
      }
      return word;
    });

    setDisplayList(hide);
  };

  const handleCrossedOffClick = (id, e) => {
    const updatedList = displayList.map((word, i) => {
      if (word.id === id) {
        word.isCrossedOff = !word.isCrossedOff;
      }
      console.log(word);
      return word;
    });
    console.log(updatedList);

    setDisplayList(updatedList);
  };
  function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.innerHTML === 'Show All') {
      x.innerHTML = 'Hide';
    } else {
      x.innerHTML = 'Show All';
    }
  }
  return (
    <div className="container">
      <h1>TO-DO List</h1>
      <div className="form-group mx-sm-3 mb-2">
        <button
          id="myDIV"
          type="button"
          name="isCrossedOff"
          className="btn btn-secondary"
          onClick={toggleHideShowBtn}
        >
          Hide
        </button>
      </div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            className="form-control"
            id="inputPassword2"
            value={word.text}
            name="text"
            type="text"
            onChange={handleChange}
          />
        </div>
        <button
          disabled={!word.text}
          className="btn btn-info mb-2"
          type="submit"
        >
          Create
        </button>
      </form>

      <div>
        <ul>
          {displayList.map((item, i) => (
            <li
              key={i}
              id={item.hide ? 'hide' : ''}
              className={item.isCrossedOff ? 'selected' : ''}
              onClick={() => handleCrossedOffClick(item.id)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
