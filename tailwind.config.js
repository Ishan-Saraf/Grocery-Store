/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'input': '3.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};