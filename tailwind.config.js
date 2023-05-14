/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 1s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      }
    },
  },
  plugins: [],
};
