/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core NGO Collaboration & Social Impact Palette
        forest: {
          DEFAULT: '#176B52',
          light: '#1e8a69',
          dark: '#125440',
        },
        deepGreen: {
          DEFAULT: '#174C3D',
          dark: '#0f3329',
        },
        warmYellow: {
          DEFAULT: '#F2B544',
          light: '#f5c66b',
          dark: '#d69929',
        },
        softCoral: {
          DEFAULT: '#E98268',
          light: '#ef9d88',
          dark: '#d2664d',
        },
        cream: {
          DEFAULT: '#FFF8EC',
          100: '#FAF4E8',
          200: '#EDE4D3',
        },
        darkText: {
          DEFAULT: '#263B35',
          muted: '#3b554e',
        },
        // Existing Midnight Teal & High-Contrast Tech Palette
        teal: {
          950: '#031918',
          900: '#073B3A', // Deep Midnight Teal
          800: '#0b4d4c',
          700: '#106260',
          card: '#0a3534',
          surface: '#0e4140',
          border: '#155655',
        },
        pearl: {
          50: '#FAF8F4',
          100: '#F3F0E8', // Soft Pearl
          200: '#E4DFD3',
          300: '#CCC5B4',
          400: '#A79E8B',
          500: '#7F7666',
        },
        lime: {
          neon: '#C6FF3D', // Vibrant Neon Lime
          hover: '#b5f524',
          glow: 'rgba(198, 255, 61, 0.35)',
          muted: '#8cb824',
        },
        prize: {
          gold: '#FFD700',
          silver: '#D1D5DB',
          bronze: '#CD7F32',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 25px -5px rgba(198, 255, 61, 0.4)',
        'neon-lg': '0 0 40px -10px rgba(198, 255, 61, 0.6)',
        'teal-glow': '0 0 50px -10px rgba(11, 77, 76, 0.6)',
        'gold-glow': '0 0 30px -5px rgba(255, 215, 0, 0.35)',
        'silver-glow': '0 0 30px -5px rgba(209, 213, 219, 0.35)',
        'bronze-glow': '0 0 30px -5px rgba(205, 127, 50, 0.35)',
        'warm-glow': '0 0 30px -5px rgba(242, 181, 68, 0.35)',
        'coral-glow': '0 0 30px -5px rgba(233, 130, 104, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
