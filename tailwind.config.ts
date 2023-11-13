import { Config } from 'tailwindcss';

export default {
  content: ['!./**/node_modules/**', '**/*.(ts|vue)'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary, 37 255 144) / <alpha-value>)', // #25ff90
        secondary: 'rgb(var(--color-secondary, 99 87 177) / <alpha-value>)', // #6357b1
      },
    },
  },
} as Config;
