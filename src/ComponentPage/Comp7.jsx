import React from 'react'
import colection from '../assets/colection.png'

export default function Comp7() {
  return (
    <div className='div7 col-12 d-flex justify-content-center '>
        <div className='dul col-10 d-flex align-items-center '>
        <div className='colections'>
            <img  src={colection} width="700px" alt="" />
        </div>
        
        <div className='collect2  text-start d-flex flex-column align-items-start gap-3'>
            <h2>What’s in the Box</h2>
            <span>HIGHLIGHTS</span>
            <ul>
                <i className='d-flex flex-column gap-2'>
                <li>Beats Solo3 Wireless headphones</li>
                <li>Carrying case</li>
                <li>3.5mm RemoteTalk cable</li>
                <li>Universal USB charging cable (USB-A to USB Micro-B)</li>
                <li>Quick Start Guide</li>
                <li>Warranty Card</li>
                </i>
            </ul>
            <button className='py-2 px-4 rounded-5'>$299.95 START</button>
        </div>
        </div>
    </div>
  )
}
