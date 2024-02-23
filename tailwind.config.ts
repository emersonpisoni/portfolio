import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        'space': "url('/images/space.jpg')",
      },
      animation: {
        zoom: 'zoom 2s cubic-bezier(0.65, 0.05, 0.36, 1) 1',
        blur: 'blur 2s cubic-bezier(0.65, 0.05, 0.36, 1) 1',
        'bg-animate': 'bg-animate 10s infinite'
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(.5)' },
          '100%': { transform: 'scale(.909)' }
        },
        blur: {
          '0%': { filter: 'blur(8px)' },
          '100%': { filter: 'blur(0)' }
        },
        'bg-animate': {
          '0%': { 'background-position': '0% 50%', 'background-size': '400% 400%', },
          '50%': { 'background-position': '100% 50%', 'background-size': '400% 400%', },
          '100%': { 'background-position': '0% 50%', 'background-size': '400% 400%', }
        }
      },
    },

  },
  plugins: [],
}
export default config
