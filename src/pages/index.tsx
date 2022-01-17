import React from 'react'
import styled from 'styled-components'

import { NavBar, About, ContactUs, Carousel } from 'sections/home'

const Container = styled.div``

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Carousel />
            <About />
            <ContactUs />
        </Container>
    )
}

export default Home
