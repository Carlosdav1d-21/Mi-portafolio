import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, Award, Mail } from "lucide-react";

const navItems = [
  { name: "Inicio", url: "/", icon: Home },
  { name: "Sobre mí", url: "#about", icon: User },
  { name: "Habilidades", url: "#skills", icon: Code2 },
  { name: "Certificaciones", url: "#certifications", icon: Award },
  { name: "Contacto", url: "#contact", icon: Mail },
];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("Inicio");

  useEffect(() => {
    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max">
      <div className="flex items-center gap-1 bg-black/80 border border-[#ffe600]/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">

        {/* Logo */}
        <div className="hidden sm:flex items-center gap-2 px-4">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#ffe600]">
            <span className="material-symbols-outlined text-xs text-black font-bold">terminal</span>
          </div>
          <span className="text-sm font-black text-white uppercase tracking-tight">
            Dev<span className="text-[#ffe600]">Portfolio</span>
          </span>
        </div>

        {/* Links */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={`relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors ${
                isActive ? "text-[#ffe600]" : "text-white/70 hover:text-[#ffe600]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#ffe600]/10 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#ffe600] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#ffe600]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#ffe600]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#ffe600]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </a>
          );
        })}

        {/* Botón CV */}
        <a
          href="/cv"
          className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#ffe600] px-5 py-2 text-sm font-black text-black hover:bg-[#ffe600]/90 transition-all ml-2"
        >
          Currículum
        </a>

      </div>
    </div>
  );
}
