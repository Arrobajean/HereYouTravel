# HereYouTravel - Agencia de Viajes

Vite + React + TypeScript · Tailwind CSS · Firebase (Firestore + Functions) · Vercel

## 🚀 Descripción

Este repositorio contiene el código del sitio web corporativo de HereYouTravel, una agencia de viajes especializada en crear experiencias únicas. Está construido con Vite + React + TypeScript, estilos con Tailwind CSS, SEO con `react-helmet-async` y persistencia de leads en Firebase/Firestore.

## 📦 Tecnologías principales

- Vite, React 18, TypeScript
- Tailwind CSS y componentes basados en Radix UI
- React Router, Framer Motion, GSAP, Lenis
- SEO con `react-helmet-async`
- Firebase (Firestore, opcionalmente Functions y Admin)
- Vercel (hosting recomendado)

## ✅ Requisitos previos

- Node.js 18+
- npm 9+ (o pnpm/yarn)
- Cuenta de Firebase (para Firestore y/o Functions)
- Cuenta en Vercel (para despliegue)

## 🔧 Instalación y uso

1. Instala dependencias

```bash
npm install
```

2. Variables de entorno

Crea un archivo `.env` en la raíz con:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

3. Desarrollo local

```bash
npm run dev
```

4. Build y preview

```bash
npm run build
npm run preview
```

## 🧩 Scripts disponibles

- `npm run dev`: inicia el entorno de desarrollo con Vite.
- `npm run build`: genera la build de producción en `dist/`.
- `npm run build:dev`: build en modo desarrollo (útil para validaciones rápidas).
- `npm run preview`: sirve la build de producción localmente.
- `npm run lint`: ejecuta ESLint.

## 📝 Notas

Este proyecto está basado en la estructura optimizada del proyecto psicosagra y adaptado para una agencia de viajes.

