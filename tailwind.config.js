/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        // existing
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        // new design tokens
        ink: "#1B1D24",
        "ink-2": "#2B2C35",
        muted: "#5B616E",
        line: "rgba(43,44,53,0.10)",
        "line-soft": "rgba(43,44,53,0.06)",
        brand: "#2B59FF",
        "brand-700": "#1E47D9",
        "brand-50": "#F2F5FF",
        "brand-100": "#F5F8FF",
        wa: "#22A05C",
        "wa-700": "#1A8049",
        cream: "#FAFAF7",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,22,35,0.04), 0 8px 24px -12px rgba(20,22,35,0.08)",
        lift: "0 10px 30px -10px rgba(43,89,255,0.20), 0 2px 6px rgba(20,22,35,0.05)",
        card: "0 1px 0 rgba(43,44,53,0.04), 0 12px 28px -16px rgba(43,44,53,0.18)",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
