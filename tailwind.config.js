module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       aspectRatio: {
        '4/3': '4 / 3',
      },
      screens: {
        "sm": "440px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px"
      },
      colors: {
        "mainGray": "#eeeeee",
        "mainBlue": "#1663be",
        "textGray": "#101010",
        "lightBlue": "#59bfff"
      },
      fontFamily: {
        "openSans": ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
