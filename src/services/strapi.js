import axios from "axios";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export const api = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 15000,
});

// Helper para parsear respuesta Strapi
export function normalizeCollectionResponse(resp) {
  return resp ?? [];
}

// Endpoints
export const fechPropiedades = async (filtros = {}) => {
  try {
    const query = new URLSearchParams({ populate: "*" });
    Object.entries(filtros).forEach(([key, val]) => {
      if (val !== "" && val !== null && val !== undefined) {
        query.append(`filters[${key}][$eq]`, val);
      }
    });
    const { data } = await axios.get(`${API_URL}/api/propiedades?${query}`);
    return data.data;
  } catch (error) {
    console.error("Error al obtener propiedades:", error);
    return [];
  }
};

export const fechTipos = async () => {
  const res = await api.get("/tipos");
  return normalizeCollectionResponse(res.data.data);
};

export const fechOperaciones = async () => {
  const res = await api.get("/operaciones");
  console.log(res.data.data);

  return normalizeCollectionResponse(res.data.data);
};

export const fechMonedas = async () => {
  const res = await api.get("/monedas");
  console.log(res.data.data);

  return normalizeCollectionResponse(res.data.data);
};
