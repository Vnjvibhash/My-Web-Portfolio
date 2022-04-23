import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.jpg'
import IMG3 from '../../asset/portfolio3.jpg'
import IMG4 from '../../asset/portfolio4.jpg'
import IMG5 from '../../asset/portfolio5.png'
import IMG6 from '../../asset/portfolio6.jpg'

const Portfolio = () => {

    const data = [
        {
            id: 1,
            image: IMG1,
            title: "Website One",
            github: 'https://github.com/Vnjvibhash/Registration-Login-pages',
            demo: 'https://www.pexels.com/photo/water-falls-in-cave-7420374/'
        },
        {
            id: 2,
            image: IMG2,
            title: "Website Two",
            github: 'https://github.com/Vnjvibhash/Coursera-Assignment',
            demo: 'https://www.pexels.com/photo/water-falls-in-cave-7420374/'
        },
        {
            id: 3,
            image: IMG3,
            title: "Mobile App One",
            github: 'https://play.google.com/store/apps/details?id=com.nakoda.client&hl=en_IN&gl=US',
            demo: 'https://www.pexels.com/photo/water-falls-in-cave-7420374/'
        },
        {
            id: 4,
            image: IMG4,
            title: "Mobile App Two",
            github: 'https://play.google.com/store/apps/details?id=com.ankspeedservice.user&hl=en_IN&gl=US',
            demo: 'https://www.pexels.com/photo/water-falls-in-cave-7420374/'
        },
        {
            id: 5,
            image: IMG5,
            title: "Mobile App Three",
            github: 'https://play.google.com/store/apps/details?id=com.somethinfishy.user&hl=en_IN&gl=US',
            demo: 'https://www.pexels.com/photo/water-falls-in-cave-7420374/'
        },
        {
            id: 6,
            image: IMG6,
            title: "Website Three",
            github: 'http://musicintuit.com/',
            demo: 'https://www.pexelhttp://musicintuit.com/s.com/photo/water-falls-in-cave-7420374/'
        }
    ]

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map( ({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__items">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_bank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_bank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })}


            </div>
        </section>








        // <section id='portfolio'>
        //     <h5>My Recent Work</h5>
        //     <h2>Portfolio</h2>

        //     <div className="container portfolio__container">
        //         <article className="portfolio__items">
        //             <div className="portfolio__item-image">
        //                 <img src={IMG1} alt="img1" />
        //             </div>
        //             <h3>This is a Portfolio item title</h3>
        //             <div className="portfolio__item-cta">
        //                 <a href="https://github.com" className="btn" target="_bank">Github</a>
        //                 <a href="https://www.pexels.com/photo/water-falls-in-cave-7420374/" className="btn btn-primary" target="_bank">Live Demo</a>
        //             </div>
        //         </article>
        //         <article className="portfolio__items">
        //             <div className="portfolio__item-image">
        //                 <img src={IMG2} alt="img1" />
        //             </div>
        //             <h3>This is a Portfolio item title</h3>
        //             <div className="portfolio__item-cta">
        //                 <a href="https://github.com" className="btn" target="_bank">Github</a>
        //                 <a href="https://www.pexels.com/photo/water-falls-in-cave-7420374/" className="btn btn-primary" target="_bank">Live Demo</a>
        //             </div>
        //         </article>
        //         <article className="portfolio__items">
        //             <div className="portfolio__item-image">
        //                 <img src={IMG3} alt="img1" />
        //             </div>
        //             <h3>This is a Portfolio item title</h3>
        //             <div className="portfolio__item-cta">
        //                 <a href="https://github.com" className="btn" target="_bank">Github</a>
        //                 <a href="https://www.pexels.com/photo/water-falls-in-cave-7420374/" className="btn btn-primary" target="_bank">Live Demo</a>
        //             </div>
        //         </article>
        //         <article className="portfolio__items">
        //             <div className="portfolio__item-image">
        //                 <img src={IMG4} alt="img1" />
        //             </div>
        //             <h3>This is a Portfolio item title</h3>
        //             <div className="portfolio__item-cta">
        //                 <a href="https://github.com" className="btn" target="_bank">Github</a>
        //                 <a href="https://www.pexels.com/photo/water-falls-in-cave-7420374/" className="btn btn-primary" target="_bank">Live Demo</a>
        //             </div>
        //         </article>
        //         <article className="portfolio__items">
        //             <div className="portfolio__item-image">
        //                 <img src={IMG5} alt="img1" />
        //             </div>
        //             <h3>This is a Portfolio item title</h3>
        //             <div className="portfolio__item-cta">
        //                 <a href="https://github.com" className="btn" target="_bank">Github</a>
        //                 <a href="https://www.pexels.com/photo/water-falls-in-cave-7420374/" className="btn btn-primary" target="_bank">Live Demo</a>
        //             </div>
        //         </article>
        //         <article className="portfolio__items">
        //             <div className="portfolio__item-image">
        //                 <img src={IMG6} alt="img1" />
        //             </div>
        //             <h3>This is a Portfolio item title</h3>
        //             <div className="portfolio__item-cta">
        //                 <a href="https://github.com" className="btn" target="_bank">Github</a>
        //                 <a href="https://www.pexels.com/photo/water-falls-in-cave-7420374/" className="btn btn-primary" target="_bank">Live Demo</a>
        //             </div>
        //         </article>
        //     </div>
        // </section>
    )
}

export default Portfolio