/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      minWidth: {
        'smm': '160px',
      },
      maxWidth: {
        'mm' : '1200px',
        '200px':'200px',
        'hero-sec':'1125px',
        '1152':'1152px',
        '106':'106px',
        '304':'304px',
        '594':'594px',
        '464':'464px',
        '132':'132px',
        '1020':'1020px'
      },
      screens:{
        "md":"767px",
        '1020':'1020px',
        '1068':'1068px',
      },
      backgroundImage: {
        'last-chance':"url('/images/last_chance_collage@2x.png')"
      },
      height: {
        '530': '530px',
        '104':'104px',
        '56':'56px'
      },
      spacing: {
        'nav-h': '62px',
        "18":"72px",
      },
      colors:{
        "grayBorder":"#D6D8DA",
        "grayWhite":"#F0F1F2",
        "lightGreen":"#BFE6DD",
        "darkBlue":"#1865F2",
        "offWhite":"#F5F5F5",
        "dark-blue":"#0B2149",
        "light-blue":"#8295BA"
      }
    },
  },
  plugins: [],
}
