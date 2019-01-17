import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { PrimaryLayout } from './layouts'

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={PrimaryLayout} />
  </BrowserRouter>
)

export default App
