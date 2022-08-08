/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "p-black": "#333333",
        "p-gray": "#DDDDDD",
        "p-green": "#6BDFDC",
        "p-blue": "#0077B6",
        success: "#42C576",
        danger: "#FF637D",
        warning: "#FFF87F",
        "p-w-1": "#F1F1F1",
        "p-w-2": "#F3F3F3",
      },

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
