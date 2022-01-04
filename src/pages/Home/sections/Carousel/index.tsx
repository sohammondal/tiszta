import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import { Container, SlideImg, StyledSwiper } from './styles'

import { pageSectionIds } from '../../../../constants'

export const Carousel: React.FC = () => {
    return (
        <Container id={pageSectionIds.HOME.carousel}>
            <StyledSwiper
                modules={[Autoplay, Pagination]}
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
