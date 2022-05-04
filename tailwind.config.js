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
        "ghost": "#f8f8ff",
        "mainBlue": "#1167b1",
        "secondaryBlue": "#2a9df4",
        "bgBlue": "#03254c",
        "lightBlue": "#88c7dc",
        "normBlue": "#4da4ea",
      },
      fontFamily: {
        "openSans": ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
