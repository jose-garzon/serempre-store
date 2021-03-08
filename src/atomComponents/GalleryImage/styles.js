// ------------------------------ import libraries
import styled, { css } from 'styled-components'

// ------------------------------ import variables
import { colors, shadows, spacing } from '../../globalStyles/Variables'
import { fadeIn } from '../../globalStyles/keyframes'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledGalleryImage = styled.figure`
  border: 2px solid ${colors.grayLight};
  border-radius: ${spacing.borderRadius};
  overflow: hidden;
  outline: none;

  &:focus {
    border: ${props =>
      props.selected
        ? `2px solid ${colors.main}`
        : `2px solid ${colors.grayDark}`};
    box-shadow: ${shadows.focusShadow};
  }

  ${props =>
    !props.main &&
    !props.selected &&
    css`
      cursor: pointer;
      &:hover {
        border: 2px solid ${colors.grayDark};
      }
    `}

  ${props =>
    props.selected &&
    !props.main &&
    css`
      border: 2px solid ${colors.main};
    `}

  ${props =>
    props.main &&
    css`
      grid-column: 1 / -1;
      grid-row: 1 / span 1;
      animation: ${fadeIn} 1.5s;

      &:focus {
        border: 2px solid ${colors.grayDark};
      }
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
