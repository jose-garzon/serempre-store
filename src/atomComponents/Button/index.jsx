// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles and images
import { StyledButton } from './styles'
// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Button = props => {
  const { label, onClick } = props
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}
