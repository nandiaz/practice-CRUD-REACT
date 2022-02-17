import React from "react";

const Coments = ({ urlImage, name, text }) => {
  return (
    <div className="media">
      <img src={urlImage} className="mr-3" alt="" />
      <div className="media-dody">
        <h5 className="mt-0">{name}</h5>
        {text}
      </div>
    </div>
  );
};

export default Coments;
