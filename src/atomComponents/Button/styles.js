// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { colors, spacing, shadows } from '@globalStyles/Variables'
import { media } from '@globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledButton = styled.button`
  height: 5rem;
  padding: ${spacing.space} ${spacing.space3};
  margin-top: ${spacing.space};
  border-radius: ${spacing.borderRadius};
  border: none;
  color: white;
  font-weight: bold;
  background-color: ${colors.main};
  outline: none;
  transition: 0.2s;

  &:hover {
    background-color: ${colors.mainLight};
  }

  &:focus {
    background-color: ${colors.main};
    box-shadow: ${shadows.focusShadow};
  }

  ${media.tablet} {
    height: 100%;
    margin-top: 0;
    margin-left: ${spacing.space2};
  }
`
