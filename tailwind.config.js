/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xz: '300px',
      xx: '400px',
      sm: '500px',
      md: '768px',
      xl: '1400px',
    },
    fontFamily: {
      body: ['Montserrat Alternates'],
      exo: ['Exo\\ 2']
    },
    extend: {
      backgroundImage: {
        'about_img': "url('../src/image/about.png')",
        'alone': "url('../src/image/alone.png')",
        'matrix': "url('../src/image/matrix.png')",
        'femka': "url('../src/image/femka.png')",
        'asia': "url('../src/image/asia.png')",
        'ugly': "url('../src/image/ugly.png')",
        'portf1': "url('../src/image/1.jpg')",
        'portf2': "url('../src/image/2.jpg')",
        'portf3': "url('../src/image/3.jpg')",
        'portf4': "url('../src/image/4.jpg')",
        'portf5': "url('../src/image/5.jpg')",
        'portf6': "url('../src/image/6.jpg')",
        'portf7': "url('../src/image/7.jpg')",
        'portf8': "url('../src/image/8.jpg')",
        'portf9': "url('../src/image/9.jpg')",
        'portf10': "url('../src/image/10.jpg')",
      },
      colors: {
        'back_page': '#190B26',
        'poison_green': '#408080',
        'hover_poison_green': 'rgba(0, 255, 255, 0.8)',
        'deep_green': 'rgba(0, 255, 255, 0.78)',
        'trapezoid': '#0FF',
        'trapezoid_blur': 'rgba(10, 155, 155, 0.1)',
        'back_block': 'rgb(0, 26, 26)',
        'back_block_blur': 'rgba(0, 25, 15, 0.5)',
        'deep_grey': 'rgba(255, 255, 255, 0.74)',
        'turbid_grey': 'rgba(255, 255, 255, 0.6)',
        'turbid_black': 'rgba(0, 0, 0, 0.87)',
        'hover_turbid_black': 'rgba(0, 0, 0, 0.8)',
        'deep_black': 'rgba(0, 0, 0, 0.1)',
        'less_turbid_black': 'rgba(0, 0, 0, 0.64)',
        'back_icon': 'rgba(0, 255, 255, 0.1)',
        'footer_back': 'rgb(13, 0, 26)',
        'footer_line': 'rgba(255, 255, 255, 0.38)',
        'special_pop_up': 'rgba(0, 0, 0, 0.9)',
        'border_dop_inf': '#604080',
        'corner_pop_up': '#8000FF',
        'calendar_border': '#009E9E',
      },
      dropShadow: {
        pressed: '0px 28px 0px -3px rgba(255,0,0,0.75)'
      }
    },
  },
  plugins: [],
}
