// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { spacing } from '../../globalStyles/Variables'
import { media } from '../../globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledHeader = styled.header`
  margin: 0 ${spacing.space2};
  padding: ${spacing.space} 0;
  border-bottom: 1px solid rgba(111, 139, 132, 0.3);
  text-align: center;

  img {
    width: 50px;
  }

  ${media.tablet} {
    margin: 0 ${spacing.space4};
  }

  ${media.desktop} {
    position: fixed;
    background-color: white;
    left: 0;
    right: 0;
    top: 0;
  }
`
