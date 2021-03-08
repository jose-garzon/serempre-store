// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles and images
import { StyledCard } from './styles'

// ------------------------------------ COMPONENT ------------------------------------//
export const Card = props => {
  const { title, description, price, selected, onClick, onKeyDown } = props
  const desc = description?.length > 0
  return (
    <StyledCard
      onKeyDown={onKeyDown}
      onClick={onClick}
      selected={selected}
      desc={desc}
      tabIndex='0'
    >
      <div>
        <h5>{title}</h5>
        <small>{description}</small>
      </div>
      {price > 0 && <h5>+ ${price}</h5>}
    </StyledCard>
  )
}
