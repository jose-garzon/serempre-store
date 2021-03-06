// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles and images
import { SyledSection } from './styles'
// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const FooterDescriptions = props => {
  const { title, description } = props
  return (
    <SyledSection>
      <h5>{title}</h5>
      <small>{description}</small>
    </SyledSection>
  )
}
