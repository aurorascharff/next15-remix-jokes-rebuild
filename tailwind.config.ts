import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => {
            return {
              textShadow: value,
            };
          },
        },
        { values: theme('textShadow') },
      );
    }),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle, rgba(152, 11, 238, 1) 0%, rgba(118, 15, 181, 1) 35%, rgba(58, 13, 85, 1) 100%)',
      },
      colors: {
        layer: '#ffffff1a',
        purple: {
          DEFAULT: '#3a0d54',
          dark: '#1f062e',
          light: '#740fb3',
        },
        red: '#e74651be',
        yellow: {
          DEFAULT: '#ffcc00',
          dark: '#CBA200',
        },
      },
      fontFamily: {
        display: ['var(--font-baloo)'],
      },
      textShadow: {
        DEFAULT: '0 2px 0 #000000, 0 2px 40px #000000',
      },
    },
  },
};
export default config;
