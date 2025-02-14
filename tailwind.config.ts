import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'dark-grey': "rgba(77, 87, 102, 1)",
        'grey': "rgba(164, 164, 164, 1)",
        'light-grey': "rgba(194, 209, 221, 1)",
        'border-grey': "rgba(129, 138, 147, 1)",
        'thin-grey': "rgba(220, 220, 220, 1)",
        'grey-200': "rgba(235, 235, 235, 1)",
        'grey-400': "rgba(153, 161, 167, 1)",
        'grey-500': "rgba(98, 110, 120, 1)",
        'grey-600': "rgba(80, 85, 93, 1)",
        'primary-blue': "rgba(22, 102, 174, 1)",
        'light-blue': "rgba(153, 178, 198, 1)",
        'blue-100': "rgba(41, 99, 173, 1)",
        'washed-blue': "rgba(241, 248, 255, 1)",
        'blue-600': "rgba(16, 58, 111, 1)",
        'off-white': "rgba(241, 241, 241, 1)",
        'black': "rgba(56, 64, 71, 1)",
        'black-900': "rgba(6, 21, 43, 1)",
        'success': "rgba(84, 232, 161, 1)",
        'danger': "rgba(236, 20, 83, 1)",
        'attention': "rgba(255, 175, 63, 1)",
        'locked': "rgba(91, 148, 199, 1)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config