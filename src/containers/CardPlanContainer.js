import React from "react";
import CardParagraph from "../components/CardParagraph";
import CardBoton from "../components/CardBoton";
import CardIcon from "../components/CardIcon";

const CardPlanContainer = ({ icon }) => {
  return (
    <div className="card__plan">
      <CardIcon icon={icon} />
      <div className="card__plan__text">
        <CardParagraph text="Annual Plan" cnparagraph="nowrap" />
        <CardParagraph text="$59.99/year" cnparagraph="" />
      </div>
      <CardBoton text="Change" cnboton="vacio--2" />
    </div>
  );
};

export default CardPlanContainer;
