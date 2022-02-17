import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Greeting {props.people}</h2>
      <p>Edad: {props.edad}</p>
    </div>
  );
};

export default Greet;
