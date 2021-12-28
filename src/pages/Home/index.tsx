import React from 'react'
import styled from 'styled-components'

import { NavBar, About, Carousel, ContactUs } from './sections'

const Container = styled.div``

export const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Carousel />
            <About />
            <ContactUs />
        </Container>
    )
}
