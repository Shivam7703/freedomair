import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
  
      },
      colors: {
                color1:"#FDF7F3",
        color3:"#FFD600",
        color2:"#E56A17"
      },
    },
  },
  plugins: [],
};

export default config;
