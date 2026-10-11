# HereYouTravel — Agencia de viajes

Sitio corporativo de HereYouTravel (agencia de viajes, Miami) con catalogo de destinos, experiencias, paquetes y blog.

## Que demuestra

- SPA con catalogo (destinos, experiencias, paquetes, detalle por slug) y blog.
- Code splitting con `React.lazy` + `Suspense` y scroll suave con Lenis.
- SEO por pagina (react-helmet-async, sitemap, robots, schema.org).
- Persistencia preparada en Firestore (`src/lib/firebase.ts`).

## Stack

Vite, React 18, TypeScript, Tailwind CSS + Radix UI, react-router-dom, Framer Motion, GSAP, Lenis, Firebase (Firestore), Vercel.

## Demo

https://hereyoutravel.com — sitio de produccion del mismo negocio (telefono y marca coinciden con este codigo); puede diferir de esta build del repo.

## Como ejecutarlo

```bash
npm install
cp .env.example .env   # completar los valores reales (ver .env.example)
npm run dev            # desarrollo local
npm run build          # build de produccion en dist/
npm run preview        # servir la build localmente
npm run lint           # ESLint
```

Despliegue en Vercel: Framework Preset Vite, Build Command `npm run build`, Output `dist`, con las variables de `.env.example` configuradas en el proyecto.

## Tests

Sin tests automatizados. Verificacion actual: `npm run build` y `npm run lint`.

## Decisiones

- SPA con react-router-dom y rewrites a `/index.html` en `vercel.json`.
- Paginas con `React.lazy` para dividir el bundle por ruta.
- Firebase via `import.meta.env.VITE_FIREBASE_*`, sin claves en el codigo.

## Limitaciones honestas

- Sin tests automatizados.
- El formulario de contacto (`useContactForm`) es un stub solo-frontend: hace `console.log` con un `TODO` pendiente, no envia a ningun backend, no tiene honeypot y no usa EmailJS (la dependencia `emailjs-com` esta declarada pero sin cablear).
- El script `build` es solo `vite build` (sin typecheck).

## Como se construyo

Con honestidad: el propio README anterior indicaba que el proyecto parte de la estructura de psicosagra, el historial arranca con `Initial commit: HereYouTravel website`, y `lovable-tagger` sigue en devDependencies (base generada con Lovable/similar). Trabajo propio posterior: adaptacion completa a agencia de viajes (destinos, experiencias, paquetes, blog, lazy loading, sitemap/schema y optimizaciones movil).

## Licencia

MIT — ver `LICENSE`.
