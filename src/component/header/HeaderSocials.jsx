import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiTwitterLine} from 'react-icons/ri'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/vivekajee" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Vnjvibhash" target="_blank"> <FaGithub /></a>
            <a href="https://twitter.com/Vnjvibhash" target="_blank"><RiTwitterLine /></a>
        </div>
    )
}

export default HeaderSocials