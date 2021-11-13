import React from "react";

const CardTitle = ({ text, cntitle }) => {
  return (
    <div>
      <h1 className={`title title__${cntitle}`}>{text}</h1>
    </div>
  );
};

export default CardTitle;
