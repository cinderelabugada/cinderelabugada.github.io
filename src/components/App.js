import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

import './App.sass'

const App = () => {
  return (
    <Router>
      <div className='App-wrapper'>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Content defaultRoute='sobre' />} />
          <Route path="/:id" component={Content} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
