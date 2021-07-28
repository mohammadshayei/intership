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
  return (
    <div className="App">
      <div calssName="header-container">
        <h3>hellow mamad</h3>
        <p>welcome to fekrafzar</p>
      </div>
      <Person/>
      <Person/>
      <Person/>
      <Person/>

      
      <div className="content"></div>
    </div>
  );
};

export default App;

{
  /* <Person name="mohammad" family="shayei" />
<Person name="mostafa" family="mosavi" />
<Person name="ali" family="milani" />
<Person name="melika" family="bitarafan" /> */
}

{
  /* <Person name={persons[0].name} family={persons[0].family} />
        <Person name={persons[1].name} family={persons[1].family} />
        <Person name={persons[2].name} family={persons[2].family} />
        <Person name={persons[3].name} family={persons[3].family} /> */
}

// {persons.map((personItemData) => (
//   <Person name={personItemData.name} family={personItemData.family} />
// ))}