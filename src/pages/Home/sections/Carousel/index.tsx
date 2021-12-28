import React from 'react'
import styled from 'styled-components'

import { flexRowCenter } from 'theme'

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    ${flexRowCenter}
    @media only screen and (min-width: 1024px) {
    }
`

export const Carousel: React.FC = () => {
    return (
        <Container onClick={() => console.log('Carousel')}>Carousel</Container>
    )
}
