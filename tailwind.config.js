module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Open Sans"'],
    },
    extend: {
      spacing: {
        400: '400px',
        450: '450px',
        500: '500px',
        21: '21ch',
      },
      colors: {
        netflix: '#303030',
        'netflix-footer': '#757575',
      },
      maxWidth: {
        '21ch': '21ch',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
