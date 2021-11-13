import React from "react";

const CardBoton = ({ text, cnboton }) => {
  return <button className={`boton  boton__${cnboton}`}>{text}</button>;
};

export default CardBoton;
