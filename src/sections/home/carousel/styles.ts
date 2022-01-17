import styled, { css } from 'styled-components'
import { Swiper } from 'swiper/react'

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    @media only screen and (min-width: 1024px) {
    }
`

export const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;

    --swiper-theme-color: white;
    --swiper-pagination-bullet-inactive-color: white;
    --swiper-pagination-bullet-inactive-opacity: 0.5;

    @media only screen and (min-width: 1024px) {
    }
`
export const SlideImg = styled.div`
    width: 100%;
    height: 100%;

    ${(props) => {
        switch (props.about) {
            case '1':
                return css`
                    background: #f46b45;
                    background: linear-gradient(to bottom, #eea849, #f46b45);
                `
            case '2':
                return css`
                    background: #ccccb2;
                    background: linear-gradient(to bottom, #757519, #ccccb2);
                `
            case '3':
                return css`
                    background: #36d1dc;
                    background: linear-gradient(to top, #36d1dc, #5b86e5);
                `
        }
    }}
`
