module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      robo: ['"Roboto Mono", monospace'],
    },
    colors: {
      primary: "#0062D1",
      secondary: "#63a5f0",
      yellow: "rgb(252,211, 77)",
    },
    extend: {
      backgroundImage: {
        dashboard: "url('../src/assets/login_bg.jpg')",
        world: "url('../src/assets/world.png')",
      },
      gridTemplateColumns: {
        flexible: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))",
      },
    },
  },
  plugins: [],
};
