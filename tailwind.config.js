/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'violet': '0 0 10px 0 rgba(120, 95, 190, 0.5)',
        // 'violet': '-4px 4px 4px -4px rgba(120, 95, 190, 0.1), 4px 4px 4px 4px rgba(120, 95, 190, 0.1)',
      },
    },
  },
  plugins: [],
}

