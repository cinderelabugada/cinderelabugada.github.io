import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { ThemeProvider } from 'styled-components'

import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

import theme from '../theme'

import './App.sass'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App-wrapper'>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Content defaultRoute='sobre' />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
