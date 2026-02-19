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

    const relationFields = new Set([
      "moneda",
      "tipo",
      "operacion",
      "localidad",
    ]);

    // ------------------------------
    // Ubicacion
    // ------------------------------
    const orFilters = [];

    if (filtros.ubicacion?.trim()) {
      const q = filtros.ubicacion.trim();

      orFilters.push(`filters[$or][0][direccion][$containsi]=${q}`);
      orFilters.push(`filters[$or][1][localidad][localidad][$containsi]=${q}`);
      orFilters.push(
        `filters[$or][2][localidad][provincia][provincia][$containsi]=${q}`
      );
    }

    // ------------------------------
    // Otros Filtros
    // ------------------------------
    Object.entries(filtros).forEach(([key, val]) => {
      if (!val || key === "ubicacion" || key === "pageSize") return;

      if (relationFields.has(key)) {
        params.append(`filters[${key}][id][$eq]`, val);
        return;
      }

      if (key === "min") return params.append("filters[precio][$gte]", val);
      if (key === "max") return params.append("filters[precio][$lte]", val);

      params.append(`filters[${key}][$eq]`, val);
    });

    if (filtros.pageSize) {
  params.append("pagination[pageSize]", filtros.pageSize);
}

    if (orFilters.length > 0) {
      orFilters.forEach((f) => {
        const [k, v] = f.split("=");
        params.append(k, v);
      });
    }

    const { data } = await api.get(`/propiedades?${params.toString()}`);
    console.log(data);
    return data.data ?? [];
  } catch (err) {
    console.error("Error propiedades:", err);
    return [];
  }
};

// Fech para obtencion de producto individual para la info de la propiedad
export const fetchPropiedad = async (id) => {
  if (!id) return null;
  const { data } = await api.get(`/propiedades/${id}?populate=*`);
  return data.data ?? null;
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

export const fechGaleria = async (id) => {
  if (!id) return null;
  const res = await api.get(`/galerias/${id}?populate=foto`);
  return res.data.data;
};

// Crear mensaje de contacto
export const createMensaje = async (payload) => {
  try {
    const { data } = await api.post("/mensajes", {
      data: payload,
    });

    return data.data;
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    throw error;
  }
};