// ------------------------------ import libraries
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// ------------------------------ import components
import { Layout } from '../components/Layout'
import { ProductDetail } from '../pages/ProductDetail'

// ------------------------------ import styles
import { GlobalStyle } from '../globalStyles/globalStyles'

// ------------------------------------ COMPONENT ------------------------------------//
export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Layout>
      <Switch>
        <Route exact path='/' component={ProductDetail} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
