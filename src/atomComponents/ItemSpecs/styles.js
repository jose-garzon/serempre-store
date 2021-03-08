// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { spacing, fonts } from '../../globalStyles/Variables'
import { media } from '../../globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledSpecs = styled.div`
  padding: ${spacing.space2} 0;
  border-top: 1px solid rgba(111, 139, 132, 0.3);

  &:last-child {
    border-bottom: 1px solid rgba(111, 139, 132, 0.3);
    margin-bottom: ${spacing.space4};
  }

  h5 {
    margin-bottom: 2px;
  }

  p {
    font-size: ${fonts.small};
  }

  ${media.tablet} {
    display: flex;
    justify-content: space-between;
  }
`
