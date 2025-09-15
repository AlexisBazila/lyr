import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";

import "./counterSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import RedCounter from "../../components/RedCounter/RedCounter";

function CounterSection() {
  return (
    <section className="counterSection">
      <div className="counterContent">
        <div className="imgDiv"></div>
        <div className="counterTexts">
          <TitleAndSubtitle
            title={"CONFIANZA EN CIFRAS"}
            subtitle={"Resultados que nos enorgullecen"}
          />
          <LeftAlignedParagraph
            paragraphs={[
              "Cada cliente satisfecho, cada operación concretada y cada año de experiencia son la mejor prueba de nuestro compromiso con un servicio inmobiliario transparente y confiable.",
              "Crecer junto a nuestros clientes nos motiva a seguir superándonos. Estos números muestran parte de ese camino recorrido.",
            ]}
          />
          <div className="countersCounters">
            <RedCounter valor={"+10"} label={"AÑOS EN EL MERCADO"} />
            <RedCounter valor={"120"} label={"CLIENTES FELICES"} />
            <RedCounter valor={"500"} label={"OPERACIONES REALIZADAS"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
