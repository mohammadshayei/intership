import React, { useState } from "react";
import "./person.css";
const Person = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="person-container">
      <div className="person-content">
        <p>{props.name}</p>
        <p>{props.family}</p>
      </div>
      <div className="getname-container">
        <input type="text" value={inputValue} onChange={onInputChangeHandler} />
        <button onClick={() => props.myCustomClick(props.name, inputValue)}>
          change name
        </button>
      </div>
    </div>
  );
};
export default Person;
