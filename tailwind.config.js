/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        animation: {
          'progress': 'progress 2s ease-in-out',
        },
        fontFamily: {
          sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
          impact: ['Impact', 'sans-serif'],
        },
        fontWeight: {
          thin: '100',
          extralight: '200',
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          black: '900',
        },
        keyframes: {
          progress: {
            '0%': {
              width: '0%',
            },
            '100%': {
              width: '100%',
            },
          },
        },
      },
    },
    plugins: [],
  }