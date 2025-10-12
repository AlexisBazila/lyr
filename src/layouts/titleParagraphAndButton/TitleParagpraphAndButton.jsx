import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";

function TitleParagpraphAndButton({
  title,
  subtitle,
  paragraphs,
  caption,
  to,
}) {
  return (
    <div className="max-[1160px]:text-center">
      <TitleAndSubtitle title={title} subtitle={subtitle} />
      <LeftAlignedParagraph paragraphs={paragraphs} />
      <SmallButton caption={caption} to={to} className="px-5 py-2" />
    </div>
  );
}

export default TitleParagpraphAndButton;
