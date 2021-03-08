// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles and images
import { StyledGalleryImage } from './styles'
// ------------------------------------ COMPONENT ------------------------------------//
export const GalleryImage = props => {
  const { img, alt, main, selected, onClick, onKeyDown } = props
  return (
    <StyledGalleryImage
      onKeyDown={onKeyDown}
      onClick={onClick}
      main={main}
      selected={selected}
      tabIndex='0'
    >
      <img src={img} alt={alt} />
    </StyledGalleryImage>
  )
}
