import React, { useState } from "react";
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    setActiveTab(item.name);
    if (item.url !== "/") {
      const el = document.querySelector(item.url);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
              onClick={(e) => handleClick(e, item)}
              style={{
                position: "relative",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                transition: "all 0.2s",
                color: isActive ? "#ffe600" : "rgba(255,255,255,0.7)",
                backgroundColor: isActive ? "rgba(255,230,0,0.1)" : "transparent",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {/* Luz superior */}
              <span
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2rem",
                  height: "4px",
                  backgroundColor: "#ffe600",
                  borderRadius: "0 0 4px 4px",
                  boxShadow: "0 0 12px 4px rgba(255,230,0,0.6), 0 0 24px 8px rgba(255,230,0,0.3)",
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
              />
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </a>
          );
        })}

        {/* Botón CV */}
        <a
          href="/cv.pdf"
          download="CV_Carlos_Galindo.pdf"
          className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#ffe600] px-5 py-2 text-sm font-black text-black hover:bg-[#ffe600]/90 transition-all ml-2"
          >
          Currículum
</a>
      </div>
    </div>
  );
}
