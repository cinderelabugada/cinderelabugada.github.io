import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <Router>
      <div className='App-wrapper'>
        <Header />
        <Switch>
          <Route path="/about">
            <h2>Teste</h2>
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
