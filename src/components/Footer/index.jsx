// ------------------------------ import libraries
import React, { useContext } from 'react'

// ------------------------------ import components
import { Button } from '../../atomComponents/Button'
import { FooterDescriptions } from '../../atomComponents/FooterDescriptions'
import { TotalContext } from '../../context'

// ------------------------------ import styles and images
import { StyledFooter, StyleFooterDescription, StyleFooterTotal } from './style'

// ------------------------------------ COMPONENT ------------------------------------//
export const Footer = () => {
  const { total } = useContext(TotalContext)

  return (
    <StyledFooter>
      <StyleFooterDescription>
        <FooterDescriptions
          title='Free Shipping'
          description='Get 2-day free shipping anywhere in North America.'
        />
        <FooterDescriptions
          title='2 years warranty'
          description="If anything goes wrong in the first two years, we'll replace it for free."
        />
      </StyleFooterDescription>
      <StyleFooterTotal>
        <div>
          <h2 title='Purchase total'>${total}</h2>
          <small>Need financing? Lear more</small>
        </div>
        <Button label='Buy now' />
      </StyleFooterTotal>
    </StyledFooter>
  )
}
