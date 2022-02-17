import React from "react";

const Coments = (props) => {
  return (
    <div className="media">
      <img src={props.urlImage} className="mr-3" alt="" />
      <div className="media-dody">
        <h5 className="mt-0">{props.name}</h5>
        {props.text}
      </div>
    </div>
  );
};

export default Coments;
