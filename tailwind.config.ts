import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      '80': '5rem',
      '30':'1.875rem',
      '36':'2.25rem',
      '12':'0.75rem',
      '16':'1rem',
      '14':'0.875rem',
      '64':'4rem',
      '20':'1.25rem',
      '48':'3rem'
    },
    fontFamily: {
      'Playfair-Display': ['Playfair Display'],
      'DM-Sans':["DM Sans"]
    },
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(94deg, rgba(255, 255, 255, 0.40) 33.35%, rgba(255, 255, 255, 0.10) 91.75%)',
        'card-gradiant':'linear-gradient(0deg, #1D1D1D -23.78%, rgba(29, 29, 29, 0.00) 100%)',
        'heart-gradiant':'linear-gradient(94deg, rgba(255, 255, 255, 0.40) 33.35%, rgba(255, 255, 255, 0.10) 91.75%)'
      },

      width: {
        '402': '25.125rem',
        '300':'18.75rem',
        '50':'3.125rem',
        '100':'6.25rem'
      },
      height: {
        '720': '45rem',
        '424':'26.5rem',
        '512':'32rem',
        '560':'35rem',
        '50':'3.125rem',
        '100':'6.25rem'
      },
      spacing: {
        '72': '4.5rem',
      },
      colors: {
        '#D9D9D9':'#D9D9D9',

        black:{
          soft:'#141414'
        },
        gray:{
          soft:'#f3f3f3',
          dark:'#D9D9D9'
        },
      }
    },
  },
  plugins: [],
};
export default config;
