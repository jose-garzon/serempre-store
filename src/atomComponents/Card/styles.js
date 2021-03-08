// ------------------------------ import libraries
import styled, { css } from 'styled-components'

// ------------------------------ import variables
import { colors, spacing, shadows } from '../../globalStyles/Variables'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.space2};
  padding: 24px;
  border: 2px solid ${colors.grayLight};
  border-radius: ${spacing.borderRadius};
  outline: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.grayDark};
  }

  &:focus {
    border: ${props =>
      props.selected
        ? `2px solid ${colors.main}`
        : `2px solid ${colors.grayDark}`};
    box-shadow: ${shadows.focusShadow};
  }

  & > h5 {
    width: 40%;
    margin-left: ${spacing.space2};
    text-align: end;
  }

  ${props =>
    props.desc &&
    css`
      div h5 {
        margin-bottom: 8px;
      }
    `}

  ${props =>
    props.selected &&
    css`
      border: 2px solid ${colors.main};
    `}
`
