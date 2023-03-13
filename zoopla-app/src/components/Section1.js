import React, { Component } from 'react'
import Home from '../assests/Home.jpg'
import Home4 from '../assests/Home4.jpg'
import { IconButton } from '@chakra-ui/react'
import {CiSearch} from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa';


export default class Body extends Component {
  render() {
    return (
     
      <div style={{position: "relative"}}><img className='home-pic' src={Home4} alt="logo" />
       <div className='center'>
       <p style={{color:"#0D395C", textAlign: "center", fontSize:"40px", display: "block",fontFamily:"Arial, Helvetica, sans-serif",margin:"0 0 20px", }} >We know what a home is really worth</p>
      <p style={{color:"#0D395C",display: "block", textAlign: "center", fontSize:"18px",margin:"0 0 20px", padding:"0 16px",fontFamily:"Arial, Helvetica, sans-serif", margin:"auto"}} >Find homes to buy or rent and check house prices</p>
     <br />
      <div class="row">
  
      {/* <ul class="nav nav-tabs">
      <li class="nav-item">
          <a style={{color:"#0D395C", textAlign: "center", fontSize:"20px", display: "block",fontFamily:"Arial, Helvetica, sans-serif"  , }} class="nav-link " data-toggle="tab" >For sale</a>
      </li>
      <li class="nav-item">
          <a style={{color:"#0D395C", textAlign: "center", fontSize:"20px", display: "block",fontFamily:"Arial, Helvetica, sans-serif"  , }} class="nav-link" data-toggle="tab">To rent</a>
      </li>
      <li class="nav-item">
          <a style={{color:"#0D395C", textAlign: "center", fontSize:"20px", display: "block",fontFamily:"Arial, Helvetica, sans-serif"  , }} class="nav-link" data-toggle="tab" >House prices</a>
      </li>
  </ul> */}

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
      
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: '5px', padding: '5px 10px' }}>
      <br/><br/>
        <input type="text" placeholder="e.g. Oxford or NW3" style={{ border: 'none', outline: 'none', backgroundColor: '#f2f2f2', width: '400px', fontSize: '18px' }} />
        <CiSearch style={{ marginRight: '5px',fontSize:"20px"}} />
        <div style={{ marginLeft: '10px', backgroundColor: '#8046f1 ', borderRadius: '5px', padding: '10px 15px', color: 'white', cursor: 'pointer',}}>Search</div>
      </div>
    </div>
</div>

      </div></div>
  
    )
  }
}
