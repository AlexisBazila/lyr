import React from "react";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import CounterSection from "../layouts/counterSection/CounterSection";
import FeaturedSection from "../layouts/featuredSection/FeaturedSection";
import AboutUsSection from "../layouts/aboutUsSection/aboutUsSection";
import OurServicesHomeSection from "../layouts/ourServicesHomeSection/OurServicesHomeSection";

function Home() {
  return (
    <div>
      <div>
        <CounterSection />
        <FeaturedSection />
        <AboutUsSection />
        <OurServicesHomeSection />
      </div>
    </div>
  );
}

export default Home;
