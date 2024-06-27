const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./bg-image.jpg')",
      },
      screens: {
        xs: { min: "0px", max: "639px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [require("daisyui")],
};
