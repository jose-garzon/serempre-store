// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { fonts, spacing } from '../../globalStyles/Variables'
import { media } from '../../globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledGalleryIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spacing.space3};

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet} {
    margin-bottom: 0;
  }

  p {
    margin-top: ${spacing.space2};
    font-size: ${fonts.small};
    text-align: center;
  }

  img {
    width: 25px;
    display: block;
  }
`
