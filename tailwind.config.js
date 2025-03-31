import daisyui from "daisyui";

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        darkGrayTheme: {
          "primary": "#4a4a4a",
          "secondary": "#6b6b6b",
          "accent": "#9e9e9e",
          "neutral": "#2d2d2d",
          "base-100": "#1f1f1f", /* Dark gray background */
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
    ],
  },
};



