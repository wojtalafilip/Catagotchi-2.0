/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        primary: `#79d9bd`,
        secondary: "#bcecde",
        tertiary: `#fdb8c2`,
        achieved: `#f5d0fe`,
        font: "#181b1e",
        done: "#babbbc",
      },
      spacing: {
        container: "440px",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      fontFamily: {
        headings: ["Koulen"],
      },
      cursor: {
        cat: "url(cursor.cur), pointer",
      },
    },
  },
  plugins: [],
};
