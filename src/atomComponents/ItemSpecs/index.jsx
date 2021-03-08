// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles and images
import { StyledSpecs } from './styles'

// ------------------------------------ COMPONENT ------------------------------------//
export const ItemSpecs = props => {
  const { title, description } = props
  return (
    <StyledSpecs>
      <h5>{title}</h5>
      <p>{description}</p>
    </StyledSpecs>
  )
}
