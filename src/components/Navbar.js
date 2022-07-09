import React from 'react'
import AirbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={AirbnbLogo} alt='Airbnb logo' />
        </nav>
    )
}