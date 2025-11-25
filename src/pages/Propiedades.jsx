import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";
import PropertyCard from "../components/propertyCard/PropertyCard";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import BigSearcher from "../components/bigSearcher/BigSearcher";

let propiedades = [
  {
    idx: 0,
    id: 1,
    created_at: "2025-10-22 17:33:24.294678+00",
    editet_at: null,
    titulo: "Casa en venta",
    descripcion:
      "Available 6/1/2026 - Location! Newly renovated 4 bed / 2.5 bath downstairs apartment on the corner of Freret and Calhoun, right next to Tulane, Loyola, and Audubon Park. This beautiful unit offers ample living area, private bathroom spaces, and washer/dryer. Enjoy original wood floors, generous closet space, and 1 off-street parking space in the carport accessible from Freret. Perfect for students!",
    direccion: "Hilaria Maidana 18, N3317 Leandro N. Alem, Misiones",
    precio: "150000",
    antiguedad: 20,
    supcubierta: "190",
    suptotal: "225",
    pisos: 2,
    garage: true,
    agua: true,
    luz: true,
    cloacas: true,
    internet: false,
    destacado: true,
    moneda: "$USD",
    localidad: "Leandro N. Alem, Misiones",
    operacion: "Venta",
    tipo: "Casa",
    baños: "2",
    ambientes: "3",
  },
  {
    idx: 1,
    id: 2,
    created_at: "2025-10-22 17:39:31.18846+00",
    editet_at: null,
    titulo: "Departamento a estrenar",
    descripcion:
      "Live among the treetops in downtown New Orleans in a National Historic Registered Building! This large updated one-bedroom condo has it all: hardwood floors, vaulted ceilings, plentiful sunlight, an assigned garage parking spot, in-unit laundry room, an expansive floor plan with space for an office or creative studio, and an interior, quiet, saltwater pool. The kitchen comes equipped with stainless steel appliances, including a dishwasher, microwave, gas range/oven, and refrigerator. The unit has been soundproofed from exterior noise! Located right in the heart of New Orleans with just steps to the World War II Museum, easy access to the Interstate, St. Charles Streetcar & bus system, famed New Orleans Warehouse District, French Quarter, Uptown, Coliseum Square Park, and more! Renowned restaurants and hospitality nearby. Walk to or listen to the Mardi Gras parades right from the comfort of your home. This property can be leased furnished or unfurnished, and flexible lease terms (30+ days) are available. Pets are accepted on a case-by-case basis. Please note this is a 3rd floor walk-up unit.",
    direccion: "Córdoba 531, N3360 Oberá, Misiones",
    precio: "300000",
    antiguedad: 0,
    supcubierta: "90",
    suptotal: "90",
    pisos: 1,
    garage: true,
    agua: true,
    luz: true,
    cloacas: true,
    internet: true,
    destacado: false,
    moneda: "$AR",
    localidad: "Oberá, Misiones",
    operacion: "Alquiler",
    tipo: "Departamento",
    baños: "1",
    ambientes: "2",
  },
];

function Propiedades() {
  return (
    <>
      <div className="relative ">
        <HeroSection title={""} subtitle={""} className={"h-[60vh]"} />
        <div className="w-[80%] absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh] ">
          <BigSearcher />
        </div>
      </div>
      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <div className="m-[5%]">
          <TitleAndSubtitle
            title={"PROPIEDADES ENCONTRADAS"}
            subtitle={"(Filtros Aplicados) - ### Resueltados "}
          />
        </div>

        <div className="flex gap-7 flex-wrap px-[5%] mb-20">
          {propiedades.map((propiedad) => {
            return <PropertyCard key={propiedad.id} propiedad={propiedad} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Propiedades;
