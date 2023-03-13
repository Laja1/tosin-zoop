import React, { Component } from 'react'
import materialize from 'materialize-css'

export default class Header extends Component {
  render() {
    return (
      <div><nav>
      <div class="nav-wrapper">
        <div className='heads'>
        <a href="#" class="brand-logo">Zoopla</a>
      <ul  class="hide-on-med-and-down"> <li><a class="heads-text">For Sale</a></li> 
       <li> <a class="heads-text">To Rent</a></li>
       <li> <a class="heads-text">House Prices</a> </li>
       <li><a  class="heads-text">Remortgage</a></li>
       <li><a  class="heads-text">Agent Valuation</a></li>
       <li> <a  class="heads-text">Instant Valuation</a></li> </ul>  
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a class="head-text" href="sass.html">My Home</a></li>
          <li><a class="head-text" href="badges.html">Saved</a></li>
          <li><a class="head-text" href="collapsible.html">Sign in</a></li>
        </ul>
      </div></div>
    </nav></div>
    )
  }
}
