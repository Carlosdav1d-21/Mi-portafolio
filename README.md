# Mi Portafolio

Portafolio personal desarrollado con Astro, React y Tailwind CSS. El sitio presenta una interfaz moderna con estilo tipo terminal, navegación interactiva y secciones para presentación, habilidades, certificaciones y contacto.

## Caracteristicas

- Diseno responsivo para escritorio y moviles.
- Navegacion flotante con desplazamiento suave entre secciones.
- Hero principal con terminal animada.
- Seccion de habilidades con modal interactivo.
- Timeline de certificaciones.
- Formulario visual de contacto.
- Descarga de CV desde `public/cv.pdf`.

## Tecnologias

- Astro 5
- React 19
- Tailwind CSS 4
- TypeScript
- Lucide React
- Framer Motion

## Estructura del proyecto

```text
Mi-portafolio/
|- public/
|  |- cv.pdf
|  |- favicon.ico
|  `- favicon.svg
|- src/
|  |- components/
|  |  |- About.astro
|  |  |- Certifications.tsx
|  |  |- Contact.astro
|  |  |- Footer.astro
|  |  |- Hero.astro
|  |  |- NavBar.tsx
|  |  |- Skills.tsx
|  |  |- Terminal.tsx
|  |  `- Timeline.tsx
|  |- layouts/
|  |  `- Layout.astro
|  |- pages/
|  |  `- index.astro
|  `- styles/
|     `- global.css
|- astro.config.mjs
`- package.json
```

## Instalacion

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor local en `http://localhost:4321`.

```bash
npm run build
```

Genera la version de produccion en `dist/`.

```bash
npm run preview
```

Previsualiza localmente la build de produccion.

## Secciones del sitio

- `Inicio`: presentacion principal y llamada a la accion.
- `Sobre mi`: resumen profesional y datos personales.
- `Habilidades`: stack tecnico con tarjetas interactivas.
- `Certificaciones`: linea de tiempo con logros academicos.
- `Contacto`: enlaces directos y formulario visual.

## Autor

Carlos David Galindo

- LinkedIn: https://www.linkedin.com/in/carlos-galindo-gonzalez
- GitHub: https://github.com/Carlosdav1d-21
- Email: carlosdavid2234@gmail.com
