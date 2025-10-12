import React from "react";
import OurStorySection from "../layouts/ourStorySection/OurStorySection";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";
import MisionAndVisionSection from "../layouts/misionAndVisionSection/MisionAndVisionSection";
import WhyChoseUsSection from "../layouts/whyChoseUsSection/WhyChoseUsSection";
import OurServicesSection from "../layouts/ourServicesSection/OurServicesSection";
import ValorationSextion from "../layouts/valorationSection/ValorationSection";
function Nosotros() {
  return (
    <>
      <div className="relative ">
        <HeroSection title={""} subtitle={""} />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh]">
          <SmallSearcher />
        </div>
      </div>
      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <OurStorySection />
        <MisionAndVisionSection />
        <WhyChoseUsSection />
        <OurServicesSection />
        <ValorationSextion />
      </div>
    </>
  );
}

export default Nosotros;
