import React from 'react'
import ReactDOM from 'react-dom'

import { URLSearchParams, BrowserRouter as Router } from "react-router-dom"

import App from './components/App'

import './style.sass'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
