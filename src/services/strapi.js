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

    // relaciones que se filtran por ID
    const relationFields = new Set(["moneda", "tipo", "operacion", "localidad"]);

    Object.entries(filtros).forEach(([key, val]) => {
      if (!val) return; // ignora vacíos

      // --- FILTROS POR RELACIONES ---
      if (relationFields.has(key)) {
        params.append(`filters[${key}][id][$eq]`, val);
        return;
      }

      // --- FILTROS DE PRECIO (min / max) ---
      if (key === "min") {
        params.append("filters[precio][$gte]", val);
        return;
      }
      if (key === "max") {
        params.append("filters[precio][$lte]", val);
        return;
      }

      // --- FILTROS NORMALES (campo = valor) ---
      const parts = key.split(".");
      if (parts.length === 1) {
        params.append(`filters[${key}][$eq]`, val);
      } else {
        // ej: operacion.tipo → filters[operacion][tipo][$eq]
        let base = `filters[${parts[0]}]`;
        for (let i = 1; i < parts.length; i++) base += `[${parts[i]}]`;
        params.append(`${base}[$eq]`, val);
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
