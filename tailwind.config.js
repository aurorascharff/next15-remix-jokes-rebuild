/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#3a0d54',
          light: '#740fb3',
        },
        yellow: '#e6b800',
        red: '#e74651be',
        layer: '#ffffff1a',
      },
      fontFamily: {
        display: ['baloo', 'sans-serif'],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.links.main'),
              '&:hover': {
                color: theme('colors.links.hover'),
                textDecoration: 'underline',
              },
            },
            h1: {
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
            },
            h2: {
              fontSize: '1.5rem',
              lineHeight: '2rem',
            },

            h3: {
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
            },

            h4: {
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
            },
            h6: {
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              margin: '0',
              fontFamily: 'font.display',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
