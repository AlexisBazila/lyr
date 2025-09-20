import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import image1 from "../../assets/images/noImage.png";
import "./aboutUsSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";
function AboutUsSection() {
  return (
    <section className="aboutUsSection">
      <div className="aboutUsImages">
        <img src={image1} alt="" className="backImage" />
        <img src={image1} alt="" className="frontImage" />
      </div>
      <div className="aboutUsContent">
        <TitleAndSubtitle
          title={"SOBRE NOSOTROS"}
          subtitle={"L&R Servicios inmobiliatios"}
        />
        <LeftAlignedParagraph
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          ]}
        />
        <SmallButton caption="Conózcanos" />
      </div>
    </section>
  );
}

export default AboutUsSection;
