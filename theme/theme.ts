import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: `"Josefin Sans", sans-serif` },
      },
      fontSizes: {
        'text-sm': { value: '0.875rem' },
        'text-base': { value: '1rem' },
        'text-lg': { value: '1.25rem' },
        'text-xl': { value: '1.5rem' },
        'text-2xl': { value: '2rem' },
        'text-3xl': { value: '2.5rem' },
        'text-4xl': { value: '3rem' },
      },
      colors: {
        'text-primary': { value: '#002a6b' },
        'text-secondary': { value: '#979797' },
        'bg-primary': { value: '#f9f9f9' },
        'bg-secondary': { value: '#ffff' },
        'bg-third': {value: '#d9d9d9'},
        'btn-primary': { value: '#e2ebfa' },
        'btn-secondary': { value: '#0760fb' },
      }
    },
    breakpoints: {
      base: '0rem', // 0px
      sm: '30rem', // ~480px
      md: '47.5rem', // ~760px
      lg: '62rem', // ~992px
      xl: '80rem', // ~1280px
      '2xl': '50rem', // ~1536px
    },
  },
  globalCss: {
    body: {
      background: '#e7e8ed',
    }
  },
})