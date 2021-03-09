// ------------------------------ import libraries
import { createGlobalStyle } from 'styled-components'
import { media } from './mediaQeries'

// ------------------------------ import variables
import { fonts, colors } from './Variables'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

html{
  font-size: 62.5%;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: ${fonts.p};
}

h1 {
  font-size: ${fonts.h1};
  ${media.tablet}{
  font-size: 4rem;
  }
}

h2 {
  font-size: ${fonts.h2}
}

h3 {
  font-size: ${fonts.h3}
}

h5 {
  font-size: ${fonts.h5}
}

p {
  font-size: ${fonts.p};
  line-height: 24px;
}

small {
  font-size: ${fonts.small};
  color: ${colors.grayDark};
}
`
