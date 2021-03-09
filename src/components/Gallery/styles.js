// ------------------------------ import libraries
import styled, { css } from 'styled-components'

// ------------------------------ import variables
import { media } from '../../globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledGalleryContainer = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.desktop} {
    position: fixed;
    width: calc(50% - 100px);
  }
`

export const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 180px 44px;
  gap: 8px;

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 336px 100px;
    gap: 16px;
  }
`

export const StyledGalleryIcons = styled.div`
  display: none;

  ${media.tablet} {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  ${props =>
    props.onMobile &&
    css`
      display: flex;
      flex-direction: column;
      ${media.tablet} {
        display: none;
      }
    `}
`
