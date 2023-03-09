import React, { Component } from 'react'
import a from '../assests/a.jpg'
import b from '../assests/b.jpg'
import c from '../assests/c.jpg'

export default class Body3 extends Component {
  render() {
    return (
      <div><br /><br /><br /><br />
      <h1 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvi", fontSize:"28px"}}>Tips on buying a new-build home</h1>
<p style={{color: "#322744",  fontSize:"18px",fontFamily:"Arial, Helvetica, sans-serif", padding:"8px 0px 24px"}}>Find out what buying schemes are available, what protections are in place, <br/>and how they’re cheaper to run.</p>

<div class="picture-row">
<div class="picture-container">
		<div class="picture picture-1"><img  src={a} alt="logo" /></div>
        <div style={{fontWeight:"400px", fontSize:"24px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 20px"}} class="picture-text">What is to build-to-rent? <br />  <hr /> </div>
        <p class="card-text" style={{fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 20px"}}><small class="text-muted">06 MARCH 2023</small></p>
</div>
<div class="picture-container">
		<div class="picture picture-1"><img  src={b} alt="logo" /></div>
        <div style={{fontWeight:"400px", fontSize:"24px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 20px"}} class="picture-text">The true cost of upgrading an older<br /> home to new build energy standards</div>
        <p class="card-text" style={{fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 20px"}}><small class="text-muted">06 MARCH 2023</small></p>
</div>
<div class="picture-container">
		<div class="picture picture-1"><img  src={c} alt="logo" /></div>
        <div style={{fontWeight:"400px", fontSize:"24px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 20px"}} class="picture-text">Buying a new-build home? <br />Here's everything you need to know</div>
        <p class="card-text" style={{fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 20px"}}><small class="text-muted">06 MARCH 2023</small></p>
</div>
</div>
<br /> <br /><br /><br /> 
</div>

    )
  } 
}
