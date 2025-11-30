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
    const params = new URLSearchParams({ populate: "*" });

    // Campos que son relaciones y deben filtrar por id en Strapi
    const relationFields = new Set([
      "moneda",
      "tipo",
      "operacion",
      "localidad",
    ]);

    Object.entries(filtros).forEach(([key, val]) => {
      if (val === "" || val === null || val === undefined) return;

      // si es un relationship simple (moneda, tipo, ...) lo convertimos a [rel][id]
      if (relationFields.has(key)) {
        params.append(`filters[${key}][id][$eq]`, val);
        return;
      }

      // si el key viene en formato "campo.subcampo" lo convertimos a filters[campo][subcampo][$eq]
      const parts = key.split(".");
      if (parts.length === 1) {
        params.append(`filters[${key}][$eq]`, val);
      } else {
        // construimos filters[a][b][c][$eq]
        let prefix = `filters[${parts[0]}]`;
        for (let i = 1; i < parts.length; i++) prefix += `[${parts[i]}]`;
        params.append(`${prefix}[$eq]`, val);
      }
    });

    const { data } = await api.get(`/propiedades?${params.toString()}`);
    return data.data ?? [];
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
  return normalizeCollectionResponse(res.data.data);
};

export const fechMonedas = async () => {
  const res = await api.get("/monedas");
  return normalizeCollectionResponse(res.data.data);
};
