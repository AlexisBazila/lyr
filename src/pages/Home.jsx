import React from "react";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import CounterSection from "../layouts/counterSection/CounterSection";
import FeaturedSection from "../layouts/featuredSection/FeaturedSection";
import AboutUsSection from "../layouts/aboutUsSection/aboutUsSection";
import OurServicesHomeSection from "../layouts/ourServicesHomeSection/OurServicesHomeSection";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";

function Home() {
  return (
    <>
      <div className="relative ">
        <HeroSection
          title={"TU PROXIMO HOGAR A UN CLIC"}
          subtitle={
            "Descubrí las mejores opciones en venta, alquiler y loteos, con información actualizada y contacto directo."
          }
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh]">
          <SmallSearcher />
        </div>
      </div>
      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <CounterSection />
        {/* <FeaturedSection /> */}
        <AboutUsSection />
        <OurServicesHomeSection />
      </div>
    </>
  );
}

export default Home;
