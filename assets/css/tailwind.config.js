tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F766E",
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        accent: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        cream: "#FAFAF9",
        ink: "#1F2937",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15, 118, 110, 0.08)",
        glow: "0 0 30px -8px rgba(16, 185, 129, 0.45)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
    },
  },
};
