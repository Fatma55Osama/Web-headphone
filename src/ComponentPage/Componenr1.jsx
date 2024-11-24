import React from 'react'
import logo from '../assets/799e71d993a42276772cc9d65de5c6bc.png'
export default function Componenr1() {
  return (
    <div className='parentbg col-12 h-100 d-flex flex-row align-items-start justify-content-around' >
        <div className='logo col-5 col-md-5 mt-5 d-flex justify-content-center align-items-center align-content-center'>
        <img src={logo} width="250px" height="125px" alt="" />
        </div>
        <div className='text2 col-6  col-md-5 d-flex flex-column align-content-end align-items-end'>
          <h1 className='beat'>Beats Solo3</h1>
          <h1 className='wir'>Wireless</h1>
          <p>With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback.</p>
          <button className='rounded-5 mt-1 py-2 px-4'>$299.95 BUY</button>

        </div>
    </div>
  )
}
