import React from "react";
import CardImg from "../components/CardImg";
import CardBoton from "../components/CardBoton";
import hero from "../images/hero.svg";
import icon from "../images/icon-music.svg";
import CardPlanContainer from "./CardPlanContainer";
import CardParagraph from "../components/CardParagraph";
import CardTitle from "../components/CardTitle";

const CardContainer = () => {
  return (
    <div className="container__card">
      <CardImg imgSrc={hero} />
      <CardTitle text="Order Summary" cntitle="" />
      <CardParagraph
        cnparagraph=""
        text="You can now listen to millions of songs, audiobooks, and
    podcasts on any device anywhere you like!"
      />
      <CardPlanContainer icon={icon} />
      <CardBoton text="Proceed to Payment" cnboton="primario" />
      <CardBoton text="Cancel Order" cnboton="vacio" />
    </div>
  );
};

export default CardContainer;
