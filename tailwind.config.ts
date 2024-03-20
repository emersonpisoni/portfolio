import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space': "url('/images/space.jpg')",
      },
      animation: {
        blur: 'blur 2s cubic-bezier(0.65, 0.05, 0.36, 1) 1',
        'bg-animate': 'bg-animate 10s infinite',
        'turning-off': 'turning-off .3s linear forwards',
        'turning-on': 'turning-on .3s linear forwards',
        'turning-on-opacity': 'turning-on-opacity .3s .3s linear forwards',
        'border-gradient': 'border-gradient 10s linear infinite',
        'typing': 'typing 1.5s steps(16, end) 1.5s forwards, blink-caret 2s step-end infinite',
        'frame-shaking': 'frame-shaking 1s infinite',
        'power-button': 'power-button 1s infinite',
      },
      keyframes: {
        blur: {
          '0%': { filter: 'blur(8px)' },
          '100%': { filter: 'blur(0)' }
        },
        'bg-animate': {
          '0%': { 'background-position': '0% 50%', 'background-size': '400% 400%', },
          '50%': { 'background-position': '100% 50%', 'background-size': '400% 400%', },
          '100%': { 'background-position': '0% 50%', 'background-size': '400% 400%', }
        },
        "turning-off": {
          "0%": {
            opacity: '1',
            height: "100%",
            width: '100%'
          },
          "50%": {
            height: '5%',
            width: '100%'
          },
          "100%": {
            height: "0",
            width: "0"
          }
        },
        "turning-on": {
          "0%": {
            height: "0",
            width: '0'
          },
          "50%": {
            height: '5%',
            width: '100%'
          },
          "100%": {
            height: "100%",
            width: "100%"
          }
        },
        "turning-on-opacity": {
          "0%": {
            opacity: '1'
          },
          "100%": {
            opacity: '0',
            'z-index': '-10'
          },
        },
        "border-gradient": {
          'to': {
            "--angle": "360deg"
          }
        },
        "typing": {
          'from': { 'width': '0' },
          'to': { 'width': '100%' }
        },
        'blink-caret': {
          '0%': { 'border-color': 'transparent' },
          '25%': { 'border-color': 'white' },
          '50%': { 'border-color': 'transparent' },
          '75%': { 'border-color': 'white' },
          '100%': { 'border-color': 'transparent' },
        },
        'frame-shaking': {
          '0%': { 'transform': 'rotate(.5deg)' },
          '50%': { 'transform': 'rotate(-0.5deg)' },
          '100%': { 'transform': 'rotate(.5deg)' },
        },
        'power-button': {
          '0%': { 'box-shadow': '0 0px 10px 3px var(--tw-shadow-color)' },
          '50%': { 'box-shadow': '0 0px 10px 4px var(--tw-shadow-color)' },
          '100%': { 'box-shadow': '0 0px 10px 3px var(--tw-shadow-color)' },
        }
      },
    },

  },
  plugins: [],
}
export default config
