/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        layer: '#ffffff1a',
        purple: {
          DEFAULT: '#3a0d54',
          light: '#740fb3',
        },
        red: '#e74651be',
        yellow: '#e6b800',
      },
      fontFamily: {
        display: ['baloo', 'sans-serif'],
      },
    },
  },
};
