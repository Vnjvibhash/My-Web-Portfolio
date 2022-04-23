import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/avatar1.jpg'
import AVTR2 from '../../asset/avatar2.jpg'
import AVTR3 from '../../asset/avatar3.jpg'
import AVTR4 from '../../asset/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonials = () => {

    const data = [
        {
            avatar: AVTR1,
            name: 'Harry',
            review: 'Amet consectetur adipisicing elit. Officiis deleniti praesentium deserunt ipsam fugiat, eum voluptas a quam veniam earum, perferendis nesciunt. Eius itaque repellendus error recusandae, magnam numquam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati dolores architecto ad fugit dolorem aliquid mollitia.'
        },
        {
            avatar: AVTR2,
            name: 'Davin',
            review: 'Amet consectetur adipisicing elit. Officiis deleniti praesentium deserunt ipsam fugiat, eum voluptas a quam veniam earum, perferendis nesciunt. Eius itaque repellendus error recusandae, magnam numquam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati dolores architecto ad fugit dolorem aliquid mollitia.'
        },
        {
            avatar: AVTR3,
            name: 'Connor',
            review: 'Amet consectetur adipisicing elit. Officiis deleniti praesentium deserunt ipsam fugiat, eum voluptas a quam veniam earum, perferendis nesciunt. Eius itaque repellendus error recusandae, magnam numquam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati dolores architecto ad fugit dolorem aliquid mollitia.'
        },
        {
            avatar: AVTR4,
            name: 'Edverd',
            review: 'Amet consectetur adipisicing elit. Officiis deleniti praesentium deserunt ipsam fugiat, eum voluptas a quam veniam earum, perferendis nesciunt. Eius itaque repellendus error recusandae, magnam numquam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati dolores architecto ad fugit dolorem aliquid mollitia.'
        },
    ]
    return (


        <section id='testimonials'>
            <h5>Review form clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"

                // install Swiper modules
                modules={[ Pagination, Scrollbar, A11y ]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>)
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials