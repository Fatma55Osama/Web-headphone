import React from 'react'
import end from '../assets/endhead.png'

export default function Comp9() {
  return (
    <div className='div9 col-12 d-flex justify-content-center'>
        <div className='div99 col-11 col-lg-9 d-flex justify-content-around mt-5' >
            <div className='endph col-12 col-md-4 col-lg-4  d-flex justify-content-center'>
                <img src={end} width="350px" alt="" />
            </div>
            
            <div className='col-11 col-md-5 col-lg-3 leftdiv d-flex flex-column gap-2'>
                <h2>Tech Specs</h2>
                <span>MANUFACTURER INFORMATION</span>
                <ul>
                    <i className='d-flex flex-column gap-2'>
                        <li>Form Factor: On Ear</li>
                        <li>Connections: Bluetooth, Wireless</li>
                        <li>Batteries: Rechargeable lithium-ion</li>
                        <li>Height: 7.8 in / 19.8 cm</li>
                        <li>Weight: 7.58 oz / 215 g</li>
                        <li>Stereo Bluetooth</li>
                        <li>Passive Playback via RemoteTalk cable</li>
                    </i>
                </ul>
            </div>
            <div className='col-12 col-md-3 col-lg-3 rightdiv'>
                <div className='succes d-flex flex-column gap-3'>
                <span>OTHER FEATURES</span>
                <ul >
                    <i className=' d-flex flex-column gap-2'>
                        <li>Bluetooth</li>
                        <li>On-Board Call and Music Controls</li>
                        <li>On-Board Volume Control</li>
                        <li>Beam-Forming Mic for Optimal Call Clarity</li>
                        <li>Noise Isolation</li>
                        <li>LED Fuel Gauge</li>
                        <li>Charge via Micro-USB cable</li>
                    </i>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
