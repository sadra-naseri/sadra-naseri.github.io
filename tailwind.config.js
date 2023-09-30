/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors : {
      black : 'rgb(0,0,0)',
      white : 'rgb(255,255,255)',
      red : {
        'light' : 'rgb(255,59,48)',
        'dark' : 'rgb(255,69,58)'
      },
      orange : {
        'light' : 'rgb(255,149,0)',
        'dark' : 'rgb(255,159,10)'
      },
      yellow : {
        'light' : 'rgb(255,204,0)',
        'dark' : 'rgb(255,214,10)'
      },
      green : {
        'light' : 'rgb(52,199,89)',
        'dark' : 'rgb(48,209,88)'
      },
      mint : {
        'light' : 'rgb(0,199,190)',
        'dark' : 'rgb(102,212,207)'
      },
      teal : {
        'light' : 'rgb(48,176,199)',
        'dark' : 'rgb(64,200,224)'
      },
      cyan : {
        'light' : 'rgb(50,173,230)',
        'dark' : 'rgb(100,210,255)'
      },
      blue : {
        'light' : 'rgb(0,122,255)',
        'dark' : 'rgb(10,132,255)'
      },
      indigo : {
        'light' : 'rgb(88,86,214)',
        'dark' : 'rgb(94,92,230)'
      },
      pink : {
        'light' : 'rgb(255,45,85)',
        'dark' : 'rgb(255,55,95)'
      },
      brown : {
        'light' : 'rgb(162,132,94)',
        'dark' : 'rgb(172,142,104)'
      },
      gray1 : {
        'light' : 'rgb(142,142,147)',
        'dark' : 'rgb(142,142,147)'
      },
      gray2 : {
        'light' : 'rgb(174,174,178)',
        'dark' : 'rgb(99,99,102)'
      },
      gray3 : {
        'light' : 'rgb(199,199,204)',
        'dark' : 'rgb(72,72,74)'
      },
      gray4 : {
        'light' : 'rgb(209,209,214)',
        'dark' : 'rgb(58,58,60)'
      },
      gray5 : {
        'light' : 'rgb(229,229,234)',
        'dark' : 'rgb(44,44,46)'
      },
      gray6 : {
        'light' : 'rgb(242,242,247)',
        'dark' : 'rgb(28,28,30)'
      },
    },
    fontFamily : {
      "Inter-thin" : "Inter-thin",
      "Inter-thinitalic" : "Inter-thinitalic",
      "Inter-extralight" : "Inter-extralight",
      "Inter-extralightItalic" : "Inter-extralightItalic",
      "Inter-light" : "Inter-light",
      "Inter-lightitalic" : "Inter-lightitalic",
      "Inter-regular" : "Inter-regular",
      "Inter-regularitalic" : "Inter-regularitalic",
      "Inter-medium" : "Inter-medium",
      "Inter-mediumitalic" : "Inter-mediumitalic",
      "Inter-semibold" : "Inter-semibold",
      "Inter-semibolditalic" : "Inter-semibolditalic",
      "Inter-bold" : "Inter-bold",
      "Inter-bolditalic" : "Inter-bolditalic",
      "Inter-extrabold" : "Inter-extrabold",
      "Inter-extrabolditalic" : "Inter-extrabolditalic",
      "Inter-black" : "Inter-black",
      "Inter-blackitalic" : "Inter-blackitalic",
      "firacode-light" : "firacode-light",
      "firacode-regular" : "firacode-regular",
      "firacode-medium" : "firacode-medium",
      "firacode-semibold" : "firacode-semibold",
      "firacode-bold" : "firacode-bold"
    },
    extend: {},
  },
  plugins: [],
}