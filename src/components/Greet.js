import React from "react";

function Greet(props) {
  return (
    <div className="container card py-2 my-5  border-secondary w-50">
      <h1>Welcome {props.name}</h1>
    </div>
  );
}

export default Greet;
