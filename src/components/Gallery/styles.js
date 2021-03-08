// ------------------------------ import libraries
import styled from 'styled-components'

// ------------------------------ import variables
import { media } from '../../globalStyles/mediaQeries'

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledGalleryContainer = styled.div`
  width: 100%;
  margin-top: 48px;
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
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`
