// ------------------------------ import libraries
import { createGlobalStyle } from 'styled-components'

// ------------------------------ import variables
import { fonts, colors } from '@globalStyles/Variables'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

html{
  font-size: 62.5%;
  font-family: circular;
}

body {
  font-family: ${fonts.fontFamily};
  font-size: ${fonts.p};
}

h1 {
  font-size: ${fonts.h1}
}

h2 {
  font-size: ${fonts.h2}
}

h3 {
  font-size: ${fonts.h3}
}

p {
  font-size: ${fonts.p}
}

small {
  font-size: ${fonts.small};
  color: ${colors.grayDark};
}
`
