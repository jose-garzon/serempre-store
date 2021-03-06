// ------------------------------ import libraries
import React from 'react'
import { Gallery } from '@components/Gallery'

// ------------------------------ import components

// ------------------------------ import styles
import { StyledContainer } from './styles'

// ------------------------------------ COMPONENT ------------------------------------//
export const Home = () => (
  <StyledContainer>
    <Gallery />
    <main>
      <h1>Description</h1>
    </main>
  </StyledContainer>
)
