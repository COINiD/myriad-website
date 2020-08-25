module.exports = {
  theme: {
    extend: {
      colors: {
        purple: "#4876F6",
        grey: "#888888",
        "highlight-grey": "#ECECEE",
        orange: "#FF8A00",
        "purple-light": "#A559C0",
        "bubble-grey": "#313131",
      },
      lineHeight: {
        "extra-tight": "1.15",
        normal: "1.4",
      },
      fontSize: {
        "7xl": "3.5rem",
        larger: "2rem",
        massive: "5.38rem",
      },
      linearGradientColors: {
        "black-grey": ["#000000", "#313131"],
      },
      inset: {
        full: "100%",
        "-24": "-24%",
        "12": "12%",
        "40": "40%",
      },
    },
    fontFamily: {
      body: ["HK Grotesk", "Helvetica Neue", "Arial", "sans-serif"],
    },
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "980px",
      xl: "980px",
    },
    linearGradientColors: theme => theme("colors"),
    radialGradientColors: theme => theme("colors"),
    conicGradientColors: theme => theme("colors"),
  },
  variants: {},
  plugins: [require("tailwindcss-gradients")],
}