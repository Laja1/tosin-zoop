import React, { Component } from 'react'
import Header from './components/Header'
import Seection from './components/Section1'
import Seection2 from './components/Seection2'
import Seection3 from './components/Section3'
import Seection4 from './components/Section4'
import Footer from './components/Footer'
import Form from './components/Form'

export default class App extends Component {
  render() {
    return (
      <div><Header />
      <Seection />
      
      <div className='container'><Seection2 />
      <Seection3 />
      <Seection4 />
      <br /><br/><Footer />
      </div>

      </div>
    )
  }
}
