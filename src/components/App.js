import React from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'
const App = () => {
  return (
    <div className='App-wrapper'>
      <Header title='Cinderela Bugada' />
      <Content>Lorem</Content>
      <Footer />
    </div>
  )
}

export default App
