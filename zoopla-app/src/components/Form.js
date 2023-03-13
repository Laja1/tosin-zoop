import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className='container' style={{  textAlign: "center", alignItems: 'center', justifyContent: 'center' }}>
       <ul style={{display:"flex",position: "relative"}} class="nav nav-tabs">
      <li class="nav-item">
          <a style={{color:"#0D395C", textAlign: "center", fontSize:"20px", display: "block",fontFamily:"Arial, Helvetica, sans-serif"  , }} class="nav-link " data-toggle="tab" >For sale</a>
      </li>
      <li class="nav-item">
          <a style={{color:"#0D395C", textAlign: "center", fontSize:"20px", display: "block",fontFamily:"Arial, Helvetica, sans-serif"  , }} class="nav-link" data-toggle="tab">To rent</a>
      </li>
      <li class="nav-item">
          <a style={{color:"#0D395C", textAlign: "center", fontSize:"20px", display: "block",fontFamily:"Arial, Helvetica, sans-serif"  , }} class="nav-link" data-toggle="tab" >House prices</a>
      </li><br />
  </ul>
   
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: '5px', padding: '5px 10px' }}>
      <br/><br/>
        <input type="text" placeholder="Search" style={{ border: 'none', outline: 'none', backgroundColor: '#f2f2f2', width: '200px', fontSize: '16px' }} />
        <FaSearch style={{ marginRight: '5px' }} />
        <div style={{ marginLeft: '10px', backgroundColor: '#2196f3', borderRadius: '5px', padding: '10px 15px', color: 'white', cursor: 'pointer' }}>Search</div>
      </div>
    </div> </div>
  );
};

export default SearchBar;