import React, { Component } from 'react'
import Home from '../assests/Home.jpg'
import Home4 from '../assests/Home4.jpg'

export default class Body extends Component {
  render() {
    return (
      <div><img className='home-pic' src={Home4} alt="logo" />
      <p style={{display: "block", margin:"auto"}} className='home-text'>We know what a home is really worth</p>
      <p style={{color:"#0D395C",display: "block", textAlign: "center", fontSize:"18px",margin:"0 0 20px", padding:"0 16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"auto"}} >Find homes to buy or rent and check house prices</p>
      
    <form style={{ color:"#0D395C", display: "block", margin: "auto", width:"200px"}}class="form-inline my-2 my-lg-0">
      <input  style={{ color:"#0D395C",}} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button type="button" class="btn btn-light">Search</button>
    </form>
      </div>
      
    )
  }
}
