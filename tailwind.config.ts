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
        zoom: 'zoom 31s ease-in-out infinite'
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(3)' },
          '50%': { transform: 'scale(1)' }
        }
      },
    },

  },
  plugins: [],
}
export default config
