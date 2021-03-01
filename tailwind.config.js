module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Open Sans"'],
    },
    extend: {
      spacing: {
        500: '500px',
      },
      colors: {
        netflix: '#303030',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
