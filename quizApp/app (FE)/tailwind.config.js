import forms from "@tailwindcss/forms";

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./*.{js,jsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    forms
  ]
};
