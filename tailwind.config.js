/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography')],
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
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                color: theme('colors.links.hover'),
                textDecoration: 'underline',
              },
              color: theme('colors.links.main'),
            },
            color: theme('colors.white'),
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
              fontFamily: 'font.display',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              margin: '0',
            },
          },
        },
      }),
    },
  },
};
