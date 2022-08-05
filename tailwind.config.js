/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },

      animation: {
        "fade-in": "fadeIn 0.25s linear",
      },

      boxShadow: {
        "template-2-resume":
          "rgba(107, 223, 220, 0.07) 0px 1px 2px, rgba(107, 223, 220, 0.07) 0px 2px 4px, rgba(107, 223, 220, 0.07) 0px 4px 8px, rgba(107, 223, 220, 0.07) 0px 8px 16px, rgba(107, 223, 220, 0.07) 0px 16px 32px, rgba(107, 223, 220, 0.07) 0px 32px 64px",

        "button-primary":
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -1px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25);",

        container:
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 3px 3px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
}
