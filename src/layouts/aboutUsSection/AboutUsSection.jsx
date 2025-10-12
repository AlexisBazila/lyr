import React from "react";

import backPhoto from "../../assets/images/backPhoto.jpg";
import frontPhoto from "../../assets/images/frontPick.jpg";
import "./aboutUsSection.css";

import TitleParagpraphAndButton from "../titleParagraphAndButton/TitleParagpraphAndButton";
function AboutUsSection() {
  return (
    <section className="aboutUsSection">
      <div className="aboutUsImages">
        <img src={backPhoto} alt="" className="backImage" />
        <img src={frontPhoto} alt="" className="frontImage" />
      </div>
      <TitleParagpraphAndButton
        title={"SOBRE NOSOTROS"}
        subtitle={"L&R Servicios inmobiliatios"}
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        ]}
        caption="Conócenos"
        to="/nosotros"
      />
    </section>
  );
}

export default AboutUsSection;
