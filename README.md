# Next.js 15 - Práctica de SSR, SSG e ISG

Este proyecto está diseñado para practicar y entender los diferentes métodos de renderizado en [Next.js 15](https://nextjs.org/): **SSR (Server Side Rendering)**, **SSG (Static Site Generation)** e **ISG (Incremental Static Generation)**.

## Objetivo

Aprender a implementar y comparar las estrategias de renderizado en Next.js 15 utilizando páginas de productos y rutas dinámicas.

## Estructura del Proyecto

- **SSR:** `/products/[id]/ssr`  
  Renderiza la página en cada request desde el servidor.
- **SSG:** `/products/[id]/ssg`  
  Genera la página de manera estática en el build.
- **ISG:** `/products/[id]/isg`  
  Genera la página estática y la revalida cada cierto tiempo.

## Tecnologías

- Next.js 15
- React
- Tailwind CSS
- API pública: [Fake Store API](https://fakestoreapi.com/)

## Scripts

```bash
npm run dev      # Ejecuta el servidor de desarrollo
npm run build    # Construye el proyecto para producción
npm run start    # Inicia el servidor en producción
```

## Cómo probar cada método

- **SSR:** Accede a `/products/[id]/ssr` y observa cómo los datos se obtienen en cada request.
- **SSG:** Accede a `/products/[id]/ssg` y verifica que la página se genera en el build.
- **ISG:** Accede a `/products/[id]/isg` y comprueba la revalidación automática.

## Archivos relevantes

- SSR: [`src/app/products/[id]/ssr/page.tsx`](src/app/products/[id]/ssr/page.tsx)
- SSG: [`src/app/products/[id]/ssg/page.tsx`](src/app/products/[id]/ssg/page.tsx)
- ISG: [`src/app/products/[id]/isg/page.tsx`](src/app/products/[id]/isg/page.tsx)

## Recursos

- [Documentación Next.js](https://nextjs.org/docs)
- [Fake Store API](https://fakestoreapi.com/)

---

**Academia APX.school - Nivel 3**
