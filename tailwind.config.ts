import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      screens: {
        pn: '0px',
        vs: '200px',
        ss: '360px',
        pp: '500px',
        sm: '821px',
        md: '1180px',
        lg: '1440px',
        xl: '1536px',
        xxl: '1900px'
      },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
