import React from "react";

function PropertyMapSection() {
  return (
    <section className=" mb-20">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1692617319777!2d-55.122793623869065!3d-27.495110976304765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8f51b07b77e13%3A0x520314389f2ceb51!2sL%26R%20Servicios%20Inmobiliarios!5e0!3m2!1ses!2sar!4v1760309359299!5m2!1ses!2sar"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[70vh]"
        />
      </div>
    </section>
  );
}

export default PropertyMapSection;
