// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import components
import { Layout } from '../components/Layout'
import { ProductDetail } from '../pages/ProductDetail'
import { TotalContext } from '../context'
import { useTotalState } from '../context/useTotalState'

// ------------------------------ import styles
import { GlobalStyle } from '../globalStyles/globalStyles'

// ------------------------------------ COMPONENT ------------------------------------//
export const App = () => {
  const state = useTotalState()
  return (
    <TotalContext.Provider value={state}>
      <GlobalStyle />
      <Layout>
        <ProductDetail />
      </Layout>
    </TotalContext.Provider>
  )
}
