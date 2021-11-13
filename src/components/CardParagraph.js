import React from "react";

const CardParagraph = ({ text, cnparagraph }) => {
  return <p className={`paragraph paragraph__${cnparagraph}`}>{text}</p>;
};

export default CardParagraph;
