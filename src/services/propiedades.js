import axios from "axios";

const API_URL = import.meta.env.VITE_STRAPI_URL;

export const getPropiedades = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/propiedades?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error("Error al obtener propiedades:", error);
    return [];
  }
};
