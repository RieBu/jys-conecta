# JyS Conecta

Sitio corporativo construido con React + Vite.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

Para simular la subcarpeta de GitHub Pages:

```bash
VITE_BASE=/jys-conecta/ pnpm build
pnpm preview
```

## Despliegue

El workflow `.github/workflows/deploy.yml` publica en GitHub Pages al hacer push a `main`.

- URL: `https://riebu.github.io/jys-conecta/`
- El build copia `index.html` a `404.html` para permitir rutas directas.
- El sitio incluye `noindex` y `robots.txt` para evitar indexación en buscadores.
