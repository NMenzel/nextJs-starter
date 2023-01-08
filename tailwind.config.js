module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        //add custom colors to tailwind theme
        "foo-bar": "#1B2A47",
      },
      //add custom font size to tailwind theme
      fontSize: {
        xxs: ".6rem",
      },
    },
  },
  plugins: [],
};
