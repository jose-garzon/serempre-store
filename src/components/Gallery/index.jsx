// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import components
import { GalleryImage } from '../../atomComponents/GalleryImage'
import { GalleryIcon } from '../../atomComponents/GalleryIcon'
import { useGallery } from './hook'

// ------------------------------ import styles and images
import {
  StyledGallery,
  StyledGalleryIcons,
  StyledGalleryContainer
} from './styles'

// ------------------------------------ COMPONENT ------------------------------------//
export const Gallery = () => {
  const { gallery, icons, setImage, onEnter, selected } = useGallery()

  return (
    <StyledGalleryContainer>
      <StyledGallery>
        <GalleryImage main {...selected} />
        {gallery.map(image => (
          <GalleryImage
            onKeyDown={e => onEnter(e, image.id)}
            onClick={() => setImage(image.id)}
            key={image.id}
            {...image}
          />
        ))}
      </StyledGallery>
      <StyledGalleryIcons>
        {icons.map(icon => (
          <GalleryIcon key={icon.id} {...icon} />
        ))}
      </StyledGalleryIcons>
    </StyledGalleryContainer>
  )
}
