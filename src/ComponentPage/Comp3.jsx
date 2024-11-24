import React from 'react'
import logoback from '../assets/161ab6cb425b7ec43838e8487c441a17.png'
import girl from '../assets/8946aae1d6f2cacc9b44f7ce71aa9853.jpeg'


export default function Comp3() {
  return (
    <div className='div3 col-12 d-flex align-content-end align-items-end'>
        <div className='part1 col-12  col-md-5 ms-5 d-flex align-content-center align-items-center'>
            <img  src={logoback} width="700px" alt="" />
            <div className='abs  col-10 d-flex flex-column align-items-baseline gap-3'>
            <h2>Apple W1 Chip</h2>
            <span>CUSTOM COOMFORT</span>
            <p>Beats Solo3 Wireless stays true to its predecessor with bold styling and a streamlined design. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day listening comfort. The headphone’s fast-flowing curves and pivoting ear cups complete this natural fit, designed for optimal comfort and sound delivery.</p>
            <button className='rounded-5 py-2 px-4'>READ MORE</button>
            </div>
        </div>
        <div className='ombg col-11  col-md-6 ms-3 mt-5'>
           <img src={girl} alt="" />
        </div>
       
    </div>
  )
}
