import { useState, useEffect } from "react";

const lines = [
  "$ whoami",
  "> desarrollador_junior",
  "$ skills --list",
  "> Python | JavaScript | React",
  "> Astro | Tailwind | HTML5",
  "$ status",
  "> Disponible para trabajar ✓",
  "$ _"
];

export default function Terminal() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    if (currentChar < lines[currentLine].length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => {
          const updated = [...prev];
          updated[currentLine] = (updated[currentLine] || "") + lines[currentLine][currentChar];
          return updated;
        });
        setCurrentChar(c => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 rounded-2xl bg-[#ffe600]/10 blur-3xl"></div>
      <div className="relative rounded-2xl border border-[#ffe600]/20 bg-[#0f0f0f] p-6 font-mono text-sm">
        
        {/* Barra superior de la terminal */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-xs text-white/40">portfolio ~ bash</span>
        </div>

        {/* Líneas de la terminal */}
        <div className="space-y-2 min-h-[200px]">
          {displayed.map((line, i) => (
            <p key={i} className={line.startsWith("$") ? "text-[#ffe600]" : "text-white/70"}>
              {line}
              {i === currentLine && <span className="animate-pulse">▋</span>}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}