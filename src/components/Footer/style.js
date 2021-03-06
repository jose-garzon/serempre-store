// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { colors, spacing } from '@globalStyles/Variables'
import { media } from '@globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: ${spacing.space2};
  background-color: ${colors.grayLight};
  border-top: 1px solid rgba(111, 139, 132, 0.3);
  ${media.tablet} {
    justify-content: space-between;
    padding: ${spacing.space2} ${spacing.space4};
  }
  ${media.desktop} {
    padding: ${spacing.space3} ${spacing.space4};
  }
`

export const StyleFooterDescription = styled.div`
  display: none;
  width: 50%;
  ${media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${media.desktop} {
    flex-direction: row;
  }
`
export const StyleFooterTotal = styled.div`
  text-align: end;
  ${media.tablet} {
    display: flex;
    align-items: center;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`
