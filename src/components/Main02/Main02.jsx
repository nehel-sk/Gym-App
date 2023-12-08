import './Main02.css'
import { IoSearch } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import React from 'react'

function Main02() {
  return (
    <div className='gymSearch'>
      <div className='container'>
        <div className='heading'>
            <h1>Find a Gym with All the Right Benifits</h1>
        </div>
        <div className='features-div'>
          <ul className='features-list'>
            <li className='item'><FaCheck /> Open 24 hours</li>
            <li className='item'><FaCheck /> Personalized Plan</li>
            <li className='item'><FaCheck /> Access to 5,000+ gyms</li>
            <li className='item'><FaCheck /> Personal & group training</li>
            <li className='item'><FaCheck /> Free access to Apple Fitness</li>
          </ul>
        </div>
        <div className='search-bar'>
          <form className='search-form'>
            <input className='search-input' type='text' placeholder='Find Your Gym Today'></input>
            <button className='button-search' type='submit'><IoSearch /></button>
          </form>
        </div> 

      </div>
      
    </div>
  )
}

export default Main02
