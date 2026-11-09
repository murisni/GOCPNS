/** Tailwind + DaisyUI. Build: npm run build  (hasil: css/app.css) */
module.exports = {
  // hover hanya aktif di perangkat yang punya kursor (bukan layar sentuh)
  future: { hoverOnlyWhenSupported: true },
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    logs: false,
    themes: [
      {
        cpns: {
          "primary": "#0b7fd4",
          "primary-content": "#ffffff",
          "secondary": "#5b5fe0",
          "secondary-content": "#ffffff",
          "accent": "#0d9488",
          "accent-content": "#ffffff",
          "neutral": "#1e3a5f",
          "neutral-content": "#eaf3ff",
          "base-100": "#ffffff",
          "base-200": "#eef6fe",
          "base-300": "#d6e6f7",
          "base-content": "#1b2b41",
          "info": "#38bdf8",
          "info-content": "#06324d",
          "success": "#16a34a",
          "success-content": "#ffffff",
          "warning": "#f59e0b",
          "warning-content": "#3a2400",
          "error": "#e0364f",
          "error-content": "#ffffff",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "9999px",
          "--btn-focus-scale": "0.97",
        },
      },
    ],
  },
};
