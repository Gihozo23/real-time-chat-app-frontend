/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Main green color for buttons or highlights
        secondary: "#8E44AD", // Purple for secondary elements
        accent: "#F39C12", // Orange for accents or call-to-actions
        background: "#F5F5F5", // Light gray background
        card: "#FFFFFF", // White background for cards
        border: "#E0E0E0", // Light gray border color
        textPrimary: "#2C3E50", // Dark blue-gray for main text
        textSecondary: "#7F8C8D", // Light gray for secondary text
        link: "#3498DB", // Blue for links
        danger: "#E74C3C", // Red for alerts or warnings
        success: "#27AE60", // Green for success messages
      },
    },
  },
  plugins: [],
};
