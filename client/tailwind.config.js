/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        "s" : "2px",
        "m": "4px",
        "l": "6px",
        "xl": "10px",
        "2xl": "20px",
        "3xl": "30px",
        "4xl": "40px", 
        "max": "100%"
      },
      colors: {
        "black": "#000000",
        "grey": {
          '100': "#BBBBBB",
          '200': "#515151",
          "400": "#242424",
          "500": "#0A0A0A"
        },
        "blue": {
          "100": "#2E4BE2",
          "200": "#3372C4",
          '400': "rgba(52, 82, 232, 0.7)",
          "500": "#081522"
        },
        "green": {
          "100" : "#316E41",
          "400" : "#0B160D"
        },
        "orange": {
          "100": "#8F5119",
          "400": "#1F1104"
        },
        "purple": {
          "100": "#754E9B",
          "400": "#140F1C"
        },
        "white": "#FFFFFF"
      },
      extend: {
        fontFamily: {
          sans: ['var(--font-geist-sans)'],
          mono: ['var(--font-geist-mono)'],
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        rightToLeft: {
          '0%': { transform : "translateX(100%)"},
          '100%': { transform : "translateX(0)"}
        },
        leftToTight: {
          '0%': { transform : "translateX(0)"},
          '100%': { transform : "translateX(100%)"}
        }
      }
    },
  },
  plugins: [],
}
