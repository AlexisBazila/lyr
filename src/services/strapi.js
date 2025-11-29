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
export const getPropiedades = async (filters = {}) => {
  const params = { populate: "*", ...filters };
  const res = await api.get("/propiedades", { params });
  return normalizeCollectionResponse(res);
};

export const fetchTipos = async () => {
  const res = await api.get("/tipos");
  return normalizeCollectionResponse(res);
};

export const fetchOperaciones = async () => {
  const res = await api.get("/operaciones");
  return normalizeCollectionResponse(res);
};
