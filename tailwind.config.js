module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
          fontFamily: {
            'noto-sans': ['"Noto Sans"', 'sans-serif'],
          }
      },
    },
    plugins: [],
  },
  darkMode: `class`,
};
