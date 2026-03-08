import { useState } from "react";

const skills = [
  {
    name: "Python",
    description: "Lenguaje versátil usado para backend, automatización, data science e inteligencia artificial. Conocido por su sintaxis limpia y legible.",
    svg: `<svg viewBox="0 0 128 128" class="w-12 h-12"><linearGradient id="python-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><linearGradient id="python-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>`,
  },
  {
    name: "JavaScript",
    description: "El lenguaje de la web. Permite crear interactividad en el frontend y también usarse en el backend con Node.js. Esencial para cualquier desarrollador web.",
    svg: `<svg viewBox="0 0 128 128" class="w-12 h-12"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.691-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>`,
  },
  {
    name: "CSS3",
    description: "El lenguaje de estilos de la web. Con CSS3 puedes crear layouts, animaciones, transiciones y diseños responsivos para cualquier pantalla.",
    svg: `<svg viewBox="0 0 128 128" class="w-12 h-12"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354H64.001v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.158-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.391z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.633-7.012-.331-3.711h34.649zm-.047 27.994v13.831H48.792l-.277-3.108-.633-7.012-.33-3.711h16.449z"/></svg>`,
  },
  {
    name: "HTML5",
    description: "La estructura de toda página web. HTML5 trae elementos semánticos, soporte multimedia nativo y mejoras de accesibilidad.",
    svg: `<svg viewBox="0 0 128 128" class="w-12 h-12"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.762h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.33 3.234-36.233.335-3.69H63.952zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>`,
  },
  {
    name: "Astro",
    description: "Framework moderno para sitios web estáticos ultra rápidos. Genera HTML puro y solo carga JavaScript cuando es necesario.",
    svg: `<svg viewBox="0 0 128 128" class="w-12 h-12"><path fill="#fff" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 00-25.89-8.765L65.629 30.28a1.833 1.833 0 00-3.52.004L48.18 77.902a90.104 90.104 0 00-26.003 8.78L43.988 15.56c.996-3.26 1.492-4.89 2.464-6.1a8.001 8.001 0 013.235-2.395c1.41-.57 3.11-.57 6.512-.57h15.395c3.406 0 5.109 0 6.523.57a8.004 8.004 0 013.387 2.4zm0 0"/><path fill="#FF5D01" d="M84.094 89.074c-3.512 3.004-10.516 5.047-18.54 5.047-9.867 0-18.148-3.07-20.352-7.207-.785 2.367-.961 4.902-.961 6.586 0 0-.516 8.5 5.398 14.418a5.678 5.678 0 015.668-5.664c5.37 0 5.363 4.683 5.359 8.488v.336c0 5.773 3.527 10.742 8.567 12.874a11.61 11.61 0 01-1.172-5.098c0-5.508 3.23-7.555 6.988-9.879 2.989-1.836 6.309-3.879 8.594-7.957a15.529 15.529 0 001.809-7.512 15.55 15.55 0 00-.358-4.432zm0 0"/></svg>`,
  },
  {
    name: "Tailwind",
    description: "Framework de CSS utility-first que permite construir diseños modernos directamente en el HTML sin escribir CSS personalizado.",
    svg: `<svg viewBox="0 0 128 128" class="w-12 h-12"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38BDF8"/></svg>`,
  },
  {
    name: "React",
    description: "Librería de JavaScript para construir interfaces de usuario con componentes reutilizables. La más popular del ecosistema frontend.",
    svg: `<svg viewBox="0 0 128 128" class="w-12 h-12"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13-1.2-21.8-9.6-26.3-7.9-4.3-19.2-2.9-30.9 3.9-3.1 1.8-6.1 3.9-9 6.1-1.6-1.4-3.2-2.7-4.8-3.8-13.7-9.5-26.9-11.9-34.9-7.2-7.6 4.4-10.4 13.9-8.3 26.9.5 2.9 1.2 6 2.1 9.1-1.5.5-3 1-4.4 1.5-14.9 5.3-24.2 13.6-24.2 23.3 0 10.1 9.9 18.8 25.9 24.1 1.9.6 3.9 1.2 5.9 1.7-.5 2.2-.9 4.4-1.2 6.5-2 14.2 1 24 9.4 28.5 8.7 4.8 21.7 2.6 34.8-5.2 2.5-1.5 5-3.2 7.5-5.1 2.6 2.1 5.2 4 7.8 5.5 13.5 7.8 26.8 9.9 35.2 5.1 8.7-5 11.9-16 9.3-30.3-.3-1.6-.7-3.3-1.2-5 1.3-.4 2.6-.8 3.8-1.2 15.3-5.5 25.1-14.2 25.1-24.1-.1-9.8-9.5-18.5-25.2-23.8z"/></g></svg>`,
  },
];

export default function Skills() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 border-t border-[#ffe600]/10" id="skills">
      <div className="mx-auto max-w-7xl">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-base font-bold uppercase tracking-widest text-[#ffe600]">
            // EXPERIENCIA
          </h2>
          <h3 className="mt-2 text-4xl font-bold text-white">
            Habilidades y Tecnologías
          </h3>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {skills.map((skill, i) => (
            <button
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="group flex flex-col items-center justify-center rounded-2xl border border-[#ffe600]/10 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 hover:bg-[#ffe600]/10 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="mb-3" dangerouslySetInnerHTML={{ __html: skill.svg }} />
              <span className="font-bold text-white text-sm">{skill.name}</span>
            </button>
          ))}
        </div>

        {/* Popup */}
        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
              className="relative z-10 rounded-2xl border border-[#ffe600]/20 bg-[#0f0f0f] p-8 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icono */}
              <div className="flex items-center gap-4 mb-4">
                <div dangerouslySetInnerHTML={{ __html: skills[selected].svg }} />
                <h3 className="text-2xl font-black text-white">{skills[selected].name}</h3>
              </div>

              {/* Descripción */}
              <p className="text-slate-400 leading-relaxed">
                {skills[selected].description}
              </p>

              {/* Botón cerrar */}
              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full rounded-xl border border-[#ffe600]/20 py-2 text-sm font-bold text-[#ffe600] hover:bg-[#ffe600]/10 transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}