import React from 'react'

import { Logo } from 'components'

import { Container, LogoWrapper, Section, Copyright } from './styles'

export const ContactUs: React.FC = () => {
    return (
        <Container>
            <Section>
                <LogoWrapper>
                    <Logo fill="black" scaleOnHover />
                </LogoWrapper>
                <div>General</div>
                <div>Contact</div>
            </Section>
            <Copyright>copyright</Copyright>
        </Container>
    )
}
