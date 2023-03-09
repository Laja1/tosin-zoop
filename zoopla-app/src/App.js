import React, { Component } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Body2 from './components/Body2'
import Body3 from './components/Body3'
import Body4 from './components/Body4'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div><Header />
      <Body />
      
      <div className='container'><Body2 />
      <Body3 />
      <Body4 />
      <br /><br/><Footer />
      </div>
   
      </div>
    )
  }
}
