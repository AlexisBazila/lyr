import { useEffect, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const API_URL = import.meta.env.VITE_STRAPI_URL;

export default function PropertyGalleryModal({ fotos, isOpen, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, index]);

  if (!isOpen) return null;

  const next = () => setIndex((prev) => (prev + 1) % fotos.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + fotos.length) % fotos.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Cerrar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        <FaTimes />
      </button>

      {/* Flecha izquierda */}
      <button onClick={prev} className="absolute left-6 text-white text-3xl">
        <FaChevronLeft />
      </button>

      {/* Imagen */}
      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <img
          src={`${API_URL}${fotos[index].url}`}
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Flecha derecha */}
      <button onClick={next} className="absolute right-6 text-white text-3xl">
        <FaChevronRight />
      </button>

      {/* Contador */}
      <div className="absolute bottom-6 text-white text-sm">
        {index + 1} / {fotos.length}
      </div>
    </div>
  );
}
