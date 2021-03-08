// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { fonts, spacing } from '../../globalStyles/Variables'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledGalleryIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
