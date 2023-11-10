import { Config } from 'tailwindcss';

export default {
  content: ['!./**/node_modules/**', '**/*.(ts|vue)'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary, #25ff90) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary, #6357b1) / <alpha-value>)',
      },
    },
  },
} as Config;
