/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#079211",
        mint: "hsl(120, 90%, 59%)",
        "light-gray": "#D1D5DB",
        dark: "#101017",
        "deep-dark": "#050507",
      },
    },
  },
  plugins: [],
};
