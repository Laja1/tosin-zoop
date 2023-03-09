import React, { Component } from 'react'
import house from '../assests/house.avif'

export default class Body2 extends Component {
  render() {
    return (
      <div className='all'>
         <div className='bt'> <h1 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvi", fontSize:"28px"}}>A spotlight on new-build homes</h1> <br />
      <p style={{color: "#322744", fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif"}}>In celebration of New Homes Week, we're shining a light on new-build homes. <br/>
      And for good reason. Here's why they're becoming increasingly popular:</p>
    
      <li style={{color: "#322744", fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 24px"}}>New-builds have average EPC ratings of A or B, potentially<br /> saving thousands on annual energy bills</li><br />
      <li style={{color: "#322744", fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 24px"}}>10-year warranties protect you if anything goes wrong</li><br /> 
      <li style={{fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 24px"}}>Buying off-plan allows you to personalise your home, your way
      </li><br /> 
      <li style={{color: "#322744",fontWeight:"400px", fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"0 0 0 24px"}}>Schemes like Shared Ownership and Deposit Unlock mean new-builds can <br /> be bought with smaller deposits</li>
     
     <br /> <button style={{fontSize:"16px", fontFamily:"Arial, Helvetica, sans-serif", border: '2px solid purple',padding:"200 140px",backgroundColor: "inherit"}} type="button" className="btn btn-light">Explore new-build homes</button>
      </div>

      <div className='im'>  <img src={house} alt="logo" /></div>
      </div>  
    )
  }
}
