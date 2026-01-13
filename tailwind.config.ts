import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: '#111218',
        secondary: '#00B3A6',
        accent: '#FF4D6D',
        surface: '#1B1B1E',
        background: '#0B0B0C',
        muted: '#A6A6A6',
        border: '#2A2A2E'
      },
      borderRadius: {
        md: '12px'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.55)'
      }
    }
  },
  plugins: [],
};

export default config;
