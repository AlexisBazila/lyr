import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fechGaleria } from "../../services/strapi";
import { FaCamera } from "react-icons/fa";
import noImage from "../../assets/images/noImage.png";
import PropertyGalleryModal from "../../components/PropertyGalleryModal/PropertyGalleryModal";

const API_URL = import.meta.env.VITE_STRAPI_URL;

function PropertyGalerySection({ galeriaId }) {
  const [openGallery, setOpenGallery] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["galeria", galeriaId],
    queryFn: () => fechGaleria(galeriaId),
    enabled: Boolean(galeriaId),
  });

  // 🟡 CASO 1: no tiene galería
  if (!galeriaId) {
    return (
      <section className="pb-[2%]">
        <img
          src={noImage}
          alt="Sin imágenes"
          className="w-full max-h-[70vh] object-cover rounded-sm"
        />
      </section>
    );
  }

  if (isLoading) return <p>Cargando galería...</p>;

  const fotos = data?.foto ?? [];

  // 🟡 CASO 2: galería vacía
  if (fotos.length === 0) {
    return (
      <section className="pb-[2%]">
        <img
          src={noImage}
          alt="Sin imágenes"
          className="w-full max-h-[70vh] object-contain rounded-sm"
        />
      </section>
    );
  }

  // 🟢 CASO NORMAL
  const principal = fotos[0];
  const secundarias = fotos.slice(1, 5);

  return (
    <section className="pb-[2%]">
      <div className="grid grid-cols-[60%_40%] max-[1160px]:grid-cols-1">
        {/* Imagen principal */}
        <div className="relative mr-[2%] max-[1160px]:mr-0 max-[1160px]:mb-[2%] max-h-[70vh]">
          <img
            src={principal?.url ? `${API_URL}${principal.url}` : noImage}
            alt={principal?.alternativeText || "Imagen principal"}
            className="w-full h-full object-cover rounded-sm"
          />

          <button
            onClick={() => setOpenGallery(true)}
            className="absolute bottom-5 left-5 flex bg-black/70 p-2 rounded-sm text-white items-center"
          >
            <FaCamera className="mr-2" />
            Ver las {fotos.length} fotos
          </button>

          <div className="absolute bottom-5 right-5 bg-black/70 py-2 px-5 rounded-sm text-white">
            1/{fotos.length}
          </div>
        </div>

        {/* Secundarias */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 max-h-[70vh]">
          {secundarias.map((img) => (
            <img
              key={img.id}
              src={img?.url ? `${API_URL}${img.url}` : noImage}
              alt={img.alternativeText || ""}
              className="w-full h-full object-cover rounded-sm"
            />
          ))}
        </div>
      </div>

      <PropertyGalleryModal
        fotos={fotos}
        isOpen={openGallery}
        onClose={() => setOpenGallery(false)}
      />
    </section>
  );
}

export default PropertyGalerySection;
