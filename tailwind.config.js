/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#07080b',
          900: '#0b0d11',
          850: '#101319',
          800: '#141821',
          700: '#1c222e',
          600: '#252e3e',
          500: '#323e52',
        },
        graphite: {
          light: '#3a4454',
          DEFAULT: '#262d38',
          dark: '#1b2029',
        },
        titanium: {
          light: '#8892a0',
          DEFAULT: '#5d6878',
          dark: '#424c5b',
        },
        accent: {
          cyan: '#38bdf8',
          ice: '#7dd3fc',
          sky: '#0284c7',
          glow: 'rgba(56, 189, 248, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
