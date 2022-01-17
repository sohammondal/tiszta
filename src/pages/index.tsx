import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

import { scrollTo } from 'helpers'
import { NavBar, About, ContactUs, Carousel } from 'sections/home'

const Container = styled.div``

const home: React.FC = () => {
    const router = useRouter()

    React.useEffect(() => {
        const section = router.query.section as string
        scrollTo(section)
    }, [router.query])

    return (
        <Container>
            <NavBar />
            <Carousel />
            <About />
            <ContactUs />
        </Container>
    )
}

export default home
