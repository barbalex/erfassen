import Typography from 'typography'

import theme from './theme'

const options = {
  bodyFontFamily: 'Roboto',
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300', '400', '500'],
    },
  ],
}

const typography = new Typography(theme)

export default typography
