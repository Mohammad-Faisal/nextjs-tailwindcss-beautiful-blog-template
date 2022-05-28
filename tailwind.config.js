module.exports = {
  // purge: ["./**/*.tsx"],
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
            h1: {
              color: "white",
            },
            "h2,h3,h4": {
              color: "#d3dce6",
            },
            "p , a , code , strong": {
              color: "white",
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
