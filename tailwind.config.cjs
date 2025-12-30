/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#13defdeb',
        'cyber-pink': '#ff00ff',
        'cyber-yellow': '#ffff00',
        'cyber-dark': '#0a0a0f',
        'cyber-light': '#1a1a2e',
        'neon-cyan': '#ff4d88',
        'neon-cyan-alt': '#ff6fa0',
        'neon-magenta': '#ff2dff',
        'neon-red': '#ff3b6f',
        'cosmic-void': '#020314',
      },
      boxShadow: {
        'neon-ring': '0 0 30px rgba(255, 59, 111, 0.55)',
        'neon-core': '0 0 60px rgba(255, 77, 136, 0.6)',
      },
      dropShadow: {
        'neon-sheen': '0 0 10px rgba(255, 77, 136, 0.65)',
      },
      backgroundImage: {
        'orb-gradient': 'radial-gradient(circle at 30% 30%, rgba(255, 59, 111, 0.65), rgba(2, 3, 20, 0.1) 55%, rgba(2, 3, 20, 0.9) 100%)',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'dystopian': ['SDDystopian', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 3s linear infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 6px #ff4d88cc, 0 0 12px #ff6fa080' },
          '100%': { textShadow: '0 0 12px #ff3b6f, 0 0 22px #ff5f8f, 0 0 32px #ff9fbf' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '2' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        'orb-sonar': {
          '0%': { transform: 'scale(0.75)', opacity: '0.8' },
          '70%': { opacity: '0.2' },
          '100%': { transform: 'scale(1.85)', opacity: '0' },
        },
        'orb-breathe': {
          '0%, 100%': { transform: 'scale(0.94)', opacity: '0.75' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
        },
        'orb-speaker': {
          '0%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1.05)' },
          '100%': { transform: 'scaleY(0.4)' },
        },
      },
    },
  },
  plugins: [],
}