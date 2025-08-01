'use client';
import { useEffect, useState } from 'react';
import { BiPalette } from 'react-icons/bi';

const themes = {
  default: { name: "Default", primary: "#ef0f3a", secondary: "#010f34" },
  luxury: { name: "Luxury", primary: "#1e3a8a", secondary: "#f59e0b" },
  modern: { name: "Modern", primary: "#0d9488", secondary: "#f97316" },
  bold: { name: "Bold", primary: "#1c1917", secondary: "#facc15" },
  eco: { name: "Eco", primary: "#1e293b", secondary: "#10b981" },
  brick: { name: "Brick", primary: "#9b2c2c", secondary: "#bfa88f" },
  minimal: { name: "Minimal", primary: "#2d2d2d", secondary: "#d4af37" },
  green: { name: "Green", primary: "#14532d", secondary: "#9ca3af" },
  vibrant: { name: "Vibrant", primary: "#4c1d95", secondary: "#fb923c" },
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('default');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="fixed top-10 right-4 z-50 shadow-2xl">
      {/* Main Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Theme Toggle"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg"
      >
        <BiPalette size={20} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 right-0 bg-white shadow-md rounded-lg p-2 flex flex-col gap-2 min-w-[160px] ">
          {Object.entries(themes).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setTheme(key);
                setOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 text-left"
            >
              <span>{value.name}</span>
              <div className="flex gap-1">
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: value.primary }}
                ></span>
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: value.secondary }}
                ></span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
