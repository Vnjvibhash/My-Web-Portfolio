import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../asset/my_photo.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Vivek Kumar</h1>
                <h5 className="text-light">Mobile & Backend Developer</h5>
                <CTA />
                
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>


                <a href="#contact" className='scroll__down'>Scroll Down</a>


            </div>
        </header>
    )
}

export default Header