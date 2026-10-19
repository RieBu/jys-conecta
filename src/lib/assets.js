const base = import.meta.env.BASE_URL;

export const asset = (path) => `${base}${String(path).replace(/^\/+/, "")}`;
