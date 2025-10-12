import React from "react";
import ContactValorationSection from "../layouts/contactValorationSection/ContactValorationSection";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";

function Tasaciones() {
  return (
    <>
      <div className="relative ">
        <HeroSection
          title={"TASACIONES PROFESIONALES"}
          subtitle={
            "Te ayudamos a establecer el precio justo de tu inmueble, con la seguridad de contar con la experiencia y el conocimiento del mercado actual."
          }
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh]">
          <SmallSearcher />
        </div>
      </div>
      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <ContactValorationSection />
      </div>
    </>
  );
}

export default Tasaciones;
