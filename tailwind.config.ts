import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Поддержка тёмной темы
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Пути для всех файлов с Tailwind-классами
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Путь к папке components
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Путь к папке app
    "./*.{js,ts,jsx,tsx,mdx}", // Корневой путь
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.875rem',
        'sm': '1rem',
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
      },
      colors: {
        border: "hsl(var(--border))", // Добавлено для поддержки border-border
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Tailwind анимации
  ],
};

export default config;
