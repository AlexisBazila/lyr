import axios from "axios";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export const api = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 15000,
});

// Helper para parsear respuesta Strapi
export function normalizeCollectionResponse(resp) {
  return resp?.data?.data ?? [];
}

// Endpoints
export const getPropiedades = async (filtros = {}) => {
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

export const getTipos = async () => {
  const res = await api.get("/tipos");
  return normalizeCollectionResponse(res);
};

export const getOperaciones = async () => {
  const res = await api.get("/operaciones");
  return normalizeCollectionResponse(res);
};

export const getMonedas = async () => {
  const res = await api.get("/monedas");
  return normalizeCollectionResponse(res);
};
