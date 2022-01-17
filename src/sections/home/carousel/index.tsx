import React from 'react'
import Swiper, { Pagination, Autoplay } from 'swiper'
import { SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { Container, SlideImg, StyledSwiper } from './styles'

import { pageSectionIds } from '../../../constants'

Swiper.use([Pagination, Autoplay])

export const Carousel: React.FC = () => {
    return (
        <Container id={pageSectionIds.HOME.carousel}>
            <StyledSwiper
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
            >
                <SwiperSlide>
                    <SlideImg about="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg about="2" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg about="3" />
                </SwiperSlide>
            </StyledSwiper>
        </Container>
    )
}
