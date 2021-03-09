// ------------------------------ import libraries
import styled, { css } from 'styled-components'

// ------------------------------ import variables
import { spacing, colors, fonts } from '../../globalStyles/Variables'
import { media } from '../../globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledContainer = styled.main`
  margin: 0 ${spacing.space2};

  ${media.tablet} {
    padding: 0 ${spacing.space4};
  }
  ${media.desktop} {
    padding: 0;
  }

  ${media.desktop} {
    display: flex;
    justify-content: space-between;
    padding-top: 75px;
    margin: 0 ${spacing.space4};
  }
`

export const StyledDescription = styled.section`
  margin-top: ${spacing.space3};

  h3 {
    margin-top: ${spacing.space3};
    margin-bottom: ${spacing.space2};
  }

  ${media.desktop} {
    margin-left: calc(50% + 33px);
    width: 50%;
  }
`

export const StyledDangerText = styled.small`
  color: ${colors.danger};
`

export const StyledSubtitle = styled.h2`
  color: ${colors.grayDark};
  font-weight: normal;
`

export const StyledPrice = styled.div`
  margin: ${spacing.space3} 0;

  h2 {
    margin-top: 8px;
    font-size: ${fonts.h1};
  }
`

export const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: ${spacing.space};

  & + p {
    color: ${colors.grayDark};
    margin-bottom: ${spacing.space3};
  }

  ${media.tablet} {
    justify-content: flex-start;
    & + p {
      margin-bottom: 0;
    }
  }
`

export const StyledLi = styled.li`
  outline: none;
  cursor: pointer;

  ${media.tablet} {
    margin-right: ${spacing.space2};
  }

  &:focus p {
    color: black;
  }

  p {
    text-decoration: none;
    color: ${colors.grayDark};
    transition: 0.2s;
    font-size: 19px;
    padding-bottom: 2px;
  }
  ${props =>
    props.selected &&
    css`
      border-bottom: 1px solid black;
      P {
        color: black;
      }
    `}
`

export const StyledFinishes = styled.div`
  ${media.tablet} {
    display: flex;
    justify-content: space-between;

    & > div {
      width: 49%;
    }
  }
`
