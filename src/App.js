import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Route exact path='/' render={() => 'App'} />
  </BrowserRouter>
)

export default App
