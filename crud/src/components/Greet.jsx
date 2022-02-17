import React from "react";

const Greet = ({ people, age }) => {
  return (
    <div>
      <h2>Greeting {people}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default Greet;
