// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import components

// ------------------------------ import styles and images
import { StyledGalleryIcon } from './styles'

// ------------------------------------ COMPONENT ------------------------------------//
export const GalleryIcon = props => {
  const { label, img } = props
  return (
    <StyledGalleryIcon>
      <img src={img} alt={label} />
      <p>{label}</p>
    </StyledGalleryIcon>
  )
}
