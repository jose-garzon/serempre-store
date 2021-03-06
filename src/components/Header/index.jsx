// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles and images
import { StyledHeader } from './styles'
import Logo from '../../assets/images/logo.png'

// ------------------------------------ COMPONENT ------------------------------------//
export const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt='logo de Serempre' />
    </StyledHeader>
  )
}
