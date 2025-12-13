import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fechGaleria } from "../../services/strapi";
import alquiler1 from "../../assets/images/alquiler1.jpg";
import alquiler2 from "../../assets/images/alquiler2.jpg";
import alquiler3 from "../../assets/images/alquiler3.jpg";
import alquiler4 from "../../assets/images/alquiler4.jpg";
import alquiler5 from "../../assets/images/alquiler5.jpg";
import { FaCamera } from "react-icons/fa";
const API_URL = import.meta.env.VITE_STRAPI_URL;

function PropertyGalerySection({ galeriaId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["galeria", galeriaId],
    queryFn: () => fechGaleria(galeriaId),
    enabled: !!galeriaId,
  });

  if (isLoading) return <p>Cargando galería...</p>;
  if (error || !data) return null;

  const fotos = data.foto || [];

  if (fotos.length === 0) return null;

  const principal = fotos[0];
  const secundarias = fotos.slice(1, 5);
  return (
    <section className="pb-[2%]">
      <div className="grid grid-cols-[60%_40%] max-[1160px]:grid-cols-1">
        <div className="relative  mr-[2%] max-[1160px]:mr-0 max-[1160px]:mb-[2%]">
          <img
            className="w-full max-h-[70vh] object-cover rounded-sm border-1 "
            src={`${API_URL}${principal.url}`}
            alt=""
          />

          <div className="absolute bottom-5 left-5">
            <a
              href="#"
              className="flex bg-[#00000098] p-2 rounded-sm text-[#fff] items-center"
            >
              <i className="mr-2">
                <FaCamera />
              </i>
              Ver las {fotos.length} fotos
            </a>
          </div>
          <div className="flex bg-[#00000098] py-2 px-5 rounded-sm text-[#fff] items-center absolute bottom-5 right-5">
            1/{fotos.length}
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler2}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler3}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler4}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler5}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyGalerySection;
