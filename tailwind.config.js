/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc4100",
        secondary: {
          100: "#32012F",
          200: "#0C0C0C",
        },
        tertiary: "#E2DFD0",
      },
    },
  },
  plugins: [],
};
