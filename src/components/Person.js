import React from "react";
import Label from "./person.module.css";

const Person = ({ name, age, remove }) => {
  return (
    <div className={Label.div}>
      <h1 className={Label.data}>Name: {name}</h1>
      <span className={Label.data}>age: {age}</span>
      <button onClick={remove}> Remove</button>
    </div>
  );
};

export default Person;
