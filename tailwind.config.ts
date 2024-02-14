import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space': "url('/images/space.jpg')"
      },
      animation: {
        zoom: 'zoom 2s cubic-bezier(0.65, 0.05, 0.36, 1) 1',
        blur: 'blur 2s cubic-bezier(0.65, 0.05, 0.36, 1) 1'
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(.5)' },
          '100%': { transform: 'scale(.95)' }
        },
        blur: {
          '0%': { filter: 'blur(8px)' },
          '100%': { filter: 'blur(0)' }
        }
      },
    },

  },
  plugins: [],
}
export default config
