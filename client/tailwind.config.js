// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)', // ← use the CSS variable here
        black: 'var(--black-color)',
        white: 'var(--white-color)',
      },

      fontFamily: {
        // Defaults
        sans: ['Rubik', 'sans-serif'],      // Use Rubik as global
        inter: ['Inter', 'sans-serif'],     // For headings
        rubik: ['Rubik', 'sans-serif'],
      },

      fontSize: {
        // Typography system
        'h1': ['48px', { lineHeight: '56px' }],
        'h2': ['32px', { lineHeight: '40px' }],
        'h3': ['24px', { lineHeight: '32px' }],
        'h4': ['18px', { lineHeight: '28px' }],
        'p-bold': ['16px', { lineHeight: '28px' }],
        'p-regular': ['16px', { lineHeight: '24px' }],
      },
    },
  },
  plugins: [],
}
