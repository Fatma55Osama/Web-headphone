import React from 'react'
import head from '../assets/head.png'
export default function Comp2() {
  return (
    <div className='div2 col-12 d-flex justify-content-between align-content-between align-align-items-center  '>
        <div className='dark col-12 col-md-6 h-100 d-flex justify-content-end align-items-center align-content-center  '>
        <div className=' col-11 col-md-9  h-100 d-flex flex-column align-items-baseline gap-4'>
            <h2>Product<br></br>Information</h2>
            <span>OVERVIEW</span>
            <p>With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback. Enjoy award-winning Beats sound with Class 1 Bluetooth® wireless listening freedom. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day comfort.</p>
            <p>Beats Solo3 Wireless is ready to go when you are. They instantly set up – just power on and hold near your iPhone – and then simultaneously connect to your Apple Watch, iPad and Mac*</p>
            <button className='rounded-5 px-4 py-2'>READ MORE</button>
        </div>
        </div>
        <div className='head col-11 col-md-6 d-flex'>
            <img src={head} width="610px" height="598px" alt="" />

        </div>
    </div>
  )
}
