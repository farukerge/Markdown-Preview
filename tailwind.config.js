/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffcd38',
        'secondary': '#ffdd67',
        'headline': '#4a4a4a',
        'paragraph': '#7a7152'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

