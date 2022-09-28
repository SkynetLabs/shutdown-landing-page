const defaultTheme = require("tailwindcss/defaultTheme");

const colors = {
  primary: { light: "#33D17E", DEFAULT: "#00c65e" },
  warning: "#ffd567",
  error: "#ED5454",
  palette: {
    100: "#f5f7f7",
    200: "#d4dddb",
    300: "#9e9e9e",
    400: "#555555",
    500: "#242424",
    600: "#0d0d0d",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      tablet: "640px",
      md: "768px",
      lg: "1024px",
      desktop: "1024px",
      xl: "1280px",
      hires: "1408px",
      "2xl": "1536px",
    },
    backgroundColor: (theme) => ({ ...theme("colors"), ...colors }),
    borderColor: (theme) => ({ ...theme("colors"), ...colors }),
    textColor: (theme) => ({ ...theme("colors"), ...colors }),
    placeholderColor: (theme) => ({ ...theme("colors"), ...colors }),
    extend: {
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        column: "320px",
        tablet: "640px",
        desktop: "1024px",
        content: "992px",
        layout: "1408px",
      },
    },
  },
};
