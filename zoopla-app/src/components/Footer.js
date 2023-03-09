import React, { Component } from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer >
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h4>For sale
</h4>
        <ul>
          <li>New homes</li>
          <li>Commercial properties for sale</li>
          <li>Overseas</li>
          <li>Find estate agents</li>
          <li>Travel time search</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h4>To rent</h4>
        <ul>
          <li>Commercial properties to rent</li>
          <li>Find letting agents</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h4>News and guides</h4>
        <ul>
          <li>Shared Ownership</li>
          <li>Buying guides</li>
          <li>Selling guides</li>
          <li>Renting guides</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h4>Zoopla for business</h4>
        <ul>
          <li>List with Zoopla</li>
          <li>ZooplaPro</li>
          <li>Alto Software</li>
        </ul>
      </div>
    </div>
  </div>
  <hr />
</footer>
<footer >
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"18px", }}>Privacy</h4>
      </div>
      <div class="col">
        <h4 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"18px", }}>Cookies</h4>
      </div>
      <div class="col">
        <h4 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"18px", }}>Contact us</h4>
      </div>
      <div class="col">
        <h4 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"18px", }}>About Zoopla</h4>
      </div>
      <div class="col">
        <h4 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"18px", }}>Careers</h4>
      </div>
      <div class="col">
        <h4 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"18px", }}>Display advertising</h4>
      </div>
      <div class="col">
        <h4 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"18px", }}>Sitemap</h4>
      </div>
      
      <div class="col" > <BsFacebook />  
       <BsTwitter />
       <BsLinkedin />
       <BsInstagram />
       <BsYoutube />
        <BsYoutube />  </div>
    
    </div>
  </div>
<h6 style={{color: "#322744", fontFamily:"Arial, sans-serif, Helvetica", fontSize:"15px", }}>Sold house prices provided by Land Registry/Registers of Scotland. © Crown copyright 2023. 
Our website is completely free for you to 
  use but we may receive a commission from < br /> some of the companies we link to on the site. *Zoopla Limited is an appointed representative of 
  Uswitch Limited which is authorised and regulated by the Financial Conduct< br /> Authority (FRN 312850) to provide this mortgage comparison
   service and incorporated with company registration number 06074771 
  and registered office at The Cooperage, 5 < br />Copper Row, London SE1 2LH. **Uswitch Limited is authorised and regulated by the Financial
   Conduct Authority (FCA) under firm reference number 312850. ***Mojo is a trading style< br /> of Life's Great Limited which is registered in 
   England and Wales (06246376) and is authorised and regulated by the Financial Conduct Authority and are on the Financial Services < br />
   Register (478215).</h6>
</footer>
      </div>
    )
  }
}
