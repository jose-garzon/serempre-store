// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { spacing } from '@globalStyles/Variables'
import { media } from '@globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const SyledSection = styled.section`
  h5 {
    margin-bottom: ${spacing.space};
  }
  small {
    display: none;
    ${media.desktop} {
      display: block;
      font-weight: bold;
    }
  }
`
