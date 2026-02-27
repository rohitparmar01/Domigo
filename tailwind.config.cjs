module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif']
      },
      colors: {
        lagoon: {
          DEFAULT: '#2372AD'
        },
        aqua: {
          DEFAULT: '#00C9FF'
        },
        lemon: {
          DEFAULT: '#FFCC00'
        }
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      }
    }
  },
  plugins: []
}
