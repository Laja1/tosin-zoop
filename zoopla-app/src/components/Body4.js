import React, { Component } from 'react'

import d from '../assests/d.jpg'


export default class Body4 extends Component {
  render() {
    return (
      <div><div style={{ height: "320px"}}class="container2">
     <div class="text2">
     <br /><br /><br /> <h2 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"28px"}}>See what local agents think your home <br />is worth <br/></h2>
        <p style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"20px", }}>Arrange for local estate agents to value your home for <br />free. No strings attached.
</p>
<button style={{fontSize:"18px", fontFamily:"Arial, Helvetica, sans-serif", border: '2px solid purple',backgroundColor: "inherit"}} type="button" className="btn btn-light ">Get a free agent valuation</button>
      </div>
      <div class="im2">
      <img style={{borderRadius: "10px ",height: "300px"}} src={d} alt="logo" />
   
      </div>
    </div></div>
    )
  }
}
