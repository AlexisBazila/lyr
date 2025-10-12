import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";
import ContactSection from "../layouts/contactSection/ContactSection";
import MapSection from "../layouts/mapSection/MapSection";

function Contacto() {
  return (
    <>
      <div className="relative ">
        <HeroSection
          title={"ESTAMOS PARA AYUDARTE"}
          subtitle={
            "Comunicate con nosotros y resolvé tus dudas de forma rápida y sencilla."
          }
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh]">
          <SmallSearcher />
        </div>
      </div>
      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <ContactSection />
        <MapSection />
      </div>
    </>
  );
}

export default Contacto;
