import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        "md-lg": "900px",
        "lg-xl": "1200px",
        "xl-2xl": "1300px",
        "3xl": "1400px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#4ad493",
        secondary: "#37474F",
        accent: "#2196F3",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
