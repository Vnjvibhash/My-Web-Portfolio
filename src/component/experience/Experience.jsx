import React from 'react'
import './experience.css'
import { BsBookmarkCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>HTML & XML</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>CSS & SCSS</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>JavaScript</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Bootstrap</h5>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Angular</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>React JS</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>PHP</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>MySQL</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>MongoDB</h5>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Node JS</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Python</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF BACKEND */}

                <div className="experience__android">
                    <h3>Mobile App Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Java</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>React Native</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Flutter</h5>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Angular</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsBookmarkCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Kotline</h5>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF BACKEND */}

            </div>
        </section>
    )
}

export default Experience