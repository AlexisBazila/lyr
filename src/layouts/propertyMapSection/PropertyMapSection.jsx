import React from "react";

function PropertyMapSection({ coordenadas }) {
  console.log(coordenadas);
  if (!coordenadas) {
    return (
      <section className="mb-20 bg-gray-100 p-8 rounded-sm text-center">
        <p className="text-lg text-gray-600">
          No se ha especificado la ubicación para esta propiedad.
        </p>
      </section>
    );
  }

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    coordenadas
  )}&z=16&output=embed`;

  return (
    <section className="mb-20">
      <iframe
        src={mapUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[70vh] rounded-sm border"
      />
    </section>
  );
}

export default PropertyMapSection;
