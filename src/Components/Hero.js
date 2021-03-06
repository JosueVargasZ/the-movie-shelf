import React from 'react';
import { useSelector } from 'react-redux';

// SWiper
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// SWiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { Card } from './ui/Card';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Hero = () => {

    const { popular } = useSelector(state => state.movies);


    return (
        <div className="hero">

            <Swiper 
                autoplay={ {delay: 2000} }
                navigation
                slidesPerView={1}
                breakpoints={{
                        450: {
                          slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                          },
                        900: {
                          slidesPerView: 4
                        }
                }}
                pagination={ {clickable: true} }>

                {
                    popular.slice(0,10).map( movie => (
                        <SwiperSlide key={ movie.id }> 
                            <Card path="/movies" id={movie.id} name={movie.title} thumbnail={movie.poster_path} overview={movie.overview} cardBig={true} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
