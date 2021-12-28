import React from 'react'
import styled from 'styled-components'

import { flexRowCenter } from 'theme'

const Container = styled.section`
    width: 100vw;
    height: 80vh;
    ${flexRowCenter}
    @media only screen and (min-width: 1024px) {
    }
`

export const ContactUs: React.FC = () => {
    return <Container>Contact Us</Container>
}
