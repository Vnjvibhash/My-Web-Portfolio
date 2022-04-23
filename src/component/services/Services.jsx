import React from 'react'
import './services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Android Aplication Development</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>IOS Aplication Development</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Desktop Based Aplication Development</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Web Aplication Development</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX  */}

                <article className="service">
                    <div className="service__head">
                        <h3>Other</h3>
                    </div>
                    
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Computer Networking</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Aplication Bug Fixing</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Home Networking</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Web page Content Writting</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT  */}

                {/* <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipis</p>
                        </li>
                        
                    </ul>
                </article> */}
               {/* END OF   CONTENT CREATION  */}

            </div>
        </section>
    )
}

export default Services