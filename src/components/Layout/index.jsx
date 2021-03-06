// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import components
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

// ------------------------------ import styles and images
import { StyledLayout } from './styles'

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Layout = props => {
  return (
    <StyledLayout>
      <Header />
      {props.children}
      <Footer />
    </StyledLayout>
  )
}
