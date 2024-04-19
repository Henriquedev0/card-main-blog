/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'yellow-custom': 'hsl(47, 88%, 63%)',
      },
      height: {
        'custom': '528px', '28': '28px'
      },
      width: {
        '82': '82px',
      }
    },
  },
  plugins: [],
}

