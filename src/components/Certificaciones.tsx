import { Timeline } from "./Timeline";

const data = [
  {
    title: "2026",
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-[#ffe600]/20 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ffe600] text-xl">▋</span>
            <h4 className="text-white font-black text-lg">User Experience Design Fundamentals</h4>
          </div>
          <p className="text-slate-400 text-sm">IBM SkillsBuild • Mar 2, 2026</p>
          <p className="text-slate-500 text-sm mt-2">
            Fundamentos de diseño UX, investigación de usuarios, prototipado y principios de usabilidad para crear experiencias digitales centradas en el usuario.
          </p>
        </div>

        <div className="rounded-2xl border border-[#ffe600]/20 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ffe600] text-xl">▋</span>
            <h4 className="text-white font-black text-lg">Ethical Hacker</h4>
          </div>
          <p className="text-slate-400 text-sm">Cisco • Feb 23, 2026</p>
          <p className="text-slate-500 text-sm mt-2">
            Técnicas de hacking ético, pruebas de penetración y evaluación de vulnerabilidades para proteger sistemas e infraestructuras digitales.
          </p>
        </div>

        <div className="rounded-2xl border border-[#ffe600]/20 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ffe600] text-xl">▋</span>
            <h4 className="text-white font-black text-lg">Desarrollo Full Stack (Sobresaliente)</h4>
          </div>
          <p className="text-slate-400 text-sm">Universidad Tecmilenio • Jan 28, 2026</p>
          <p className="text-slate-500 text-sm mt-2">
            Desarrollo completo de aplicaciones web, desde el frontend hasta el backend, con manejo de bases de datos y despliegue en la nube.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-[#ffe600]/20 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ffe600] text-xl">▋</span>
            <h4 className="text-white font-black text-lg">Ciberseguridad (Sobresaliente)</h4>
          </div>
          <p className="text-slate-400 text-sm">Universidad Tecmilenio • Dec 17, 2025</p>
          <p className="text-slate-500 text-sm mt-2">
            Principios de seguridad informática, protección de datos, gestión de riesgos y defensa ante amenazas en entornos digitales.
          </p>
        </div>

        <div className="rounded-2xl border border-[#ffe600]/20 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ffe600] text-xl">▋</span>
            <h4 className="text-white font-black text-lg">AWS Academy Graduate — Cloud Operations</h4>
          </div>
          <p className="text-slate-400 text-sm">Amazon Web Services • Apr 27, 2025</p>
          <p className="text-slate-500 text-sm mt-2">
            Gestión de infraestructura, automatización, monitoreo, seguridad y optimización de recursos en plataformas basadas en la nube AWS.
          </p>
        </div>

        <div className="rounded-2xl border border-[#ffe600]/20 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ffe600] text-xl">▋</span>
            <h4 className="text-white font-black text-lg">Web Development Fundamentals</h4>
          </div>
          <p className="text-slate-400 text-sm">IBM SkillsBuild • Feb 19, 2025</p>
          <p className="text-slate-500 text-sm mt-2">
            Fundamentos del desarrollo web moderno, incluyendo HTML, CSS, JavaScript y buenas prácticas para construir sitios responsivos y accesibles.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="space-y-6">
        <div className="rounded-2xl border border-[#ffe600]/20 bg-[#ffe600]/5 p-6 hover:border-[#ffe600]/40 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#ffe600] text-xl">▋</span>
            <h4 className="text-white font-black text-lg">AWS Academy Graduate — Cloud Foundations</h4>
          </div>
          <p className="text-slate-400 text-sm">Amazon Web Services • Oct 25, 2023</p>
          <p className="text-slate-500 text-sm mt-2">
            Conocimientos fundamentales sobre computación en la nube y los principales servicios de Amazon Web Services.
          </p>
        </div>
      </div>
    ),
  },
];

export default function Certifications() {
  return (
    <section className="py-24 px-4 border-t border-[#ffe600]/10" id="certifications">
      <div className="mx-auto max-w-7xl">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-base font-bold uppercase tracking-widest text-[#ffe600]">
            // LOGROS
          </h2>
          <h3 className="mt-2 text-4xl font-bold text-white">
            Certificaciones
          </h3>
        </div>

        <Timeline data={data} />
      </div>
    </section>
  );
}