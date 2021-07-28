import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";
const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "mohammad",
      family: "shaeyi",
    },
    {
      name: "mostafa",
      family: "mosavi",
    },
    {
      name: "ali",
      family: "milani",
    },
    {
      name: "melika",
      family: "bitarfan",
    },
  ]);

  const onClickButtonHandler = (name, newName) => {
    let newPersons = persons.map((person) => {
      if (person.name === name) return { ...person, name: newName };
      else return person;
    });

    setPersons(newPersons);
  };
  return (
    <div className="App">
      <div calssName="header-container">
        <h3>hellow mamad</h3>
        <p>welcome to fekrafzar</p>
      </div>
      {persons.map((itemData) => (
        <Person
          myCustomClick={onClickButtonHandler}
          name={itemData.name}
          family={itemData.family}
        />
      ))}
      <div className="content"></div>
    </div>
  );
};

export default App;
