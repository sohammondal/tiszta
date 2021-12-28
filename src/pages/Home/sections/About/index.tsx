import React from 'react'
import styled from 'styled-components'

import { flexRowCenter } from 'theme'

const Container = styled.section`
    width: 100vw;
    height: 60vh;
    ${flexRowCenter}
`

export const About: React.FC = () => {
    return <Container>About</Container>
}
