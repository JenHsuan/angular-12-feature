/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  darkMode: "class", 
  theme: {
    screens: {
      xs: '360px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    extend: {
      borderRadius: {
        xl: '1rem',
      },
      colors: {
        red: {
          ...defaultTheme.theme?.colors.red,
          600: "#E53935",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover']
    },
  },
  plugins: [],
}

