import React from "react";
import IconAndDescription from "../../components/iconAndDescription/IconAndDescription";
import TitleParagpraphAndButton from "../titleParagraphAndButton/TitleParagpraphAndButton";
import {
  TbHomeDollar,
  TbHomeSearch,
  TbHomeShield,
  TbHomeStats,
} from "react-icons/tb";

function OurServicesSection() {
  return (
    <section className="my-20 mx-[5%]">
      <div className="grid grid-cols-[40%_60%] items-center max-[1160px]:grid-cols-1">
        <div>
          <TitleParagpraphAndButton
            title={"nuestros servicios"}
            subtitle={"Como podemos ayudarlo"}
            paragraphs={[
              "Brindamos soluciones integrales para propietarios e inversores que buscan confianza, rentabilidad y acompañamiento profesional en cada etapa del proceso inmobiliario. Nuestro objetivo es simplificar la gestión y maximizar el valor de tu propiedad.",
            ]}
            caption={"Contáctanos"}
            to="/contacto"
          />
        </div>
        <div className="grid grid-cols-2 max-[700px]:grid-cols-1">
          <IconAndDescription
            label="ADMINISTRACION DE PROPIEDADES"
            icon={<TbHomeShield />}
            desc={
              "Nos ocupamos de la gestión completa de tu inmueble, desde el cobro de alquileres hasta el mantenimiento y control de gastos. Vos disfrutás de los beneficios, nosotros nos encargamos de todo."
            }
          />
          <IconAndDescription
            label="ASESORAMIENTO PERSONALIZADO"
            icon={<TbHomeSearch />}
            desc={
              "Te acompañamos en cada decisión con un enfoque profesional y transparente. Nuestro equipo te ayuda a encontrar la mejor estrategia según tus objetivos y necesidades."
            }
          />
          <IconAndDescription
            label="VENTA Y ALQUILERES"
            icon={<TbHomeDollar />}
            desc={
              "Publicamos, promocionamos y gestionamos cada operación con seriedad y eficiencia, buscando siempre el mejor resultado para ambas partes. Aseguramos procesos ágiles y seguros."
            }
          />
          <IconAndDescription
            label="DESARROLLOS, LOTEOS, INVERSIONES"
            icon={<TbHomeStats />}
            desc={
              "Te asesoramos en proyectos de desarrollo inmobiliario, loteos y oportunidades de inversión. Analizamos el mercado para garantizar decisiones rentables y sostenibles a largo plazo."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
