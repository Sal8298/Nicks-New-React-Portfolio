/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'burtons': "burtons",
      'mourich': "mourich",
      "modaz": "modaz",
      "railway": "railway"
    }
    // extend: {},
  },
  plugins: [],
}
