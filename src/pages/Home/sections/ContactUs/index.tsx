import React from 'react'

import { Logo } from 'components'

import { ContactFrom } from './ContactForm'
import { General } from './General'
import { Container, LogoWrapper, Section, Copyright } from './styles'

export const ContactUs: React.FC = () => {
    return (
        <Container>
            <Section>
                <LogoWrapper>
                    <Logo fill="black" scaleOnHover />
                </LogoWrapper>
                <General />
                <ContactFrom />
            </Section>
            <Copyright>
                <div>
                    Copyright © {new Date().getFullYear()} Tiszta. All rights
                    reserved.
                </div>
                <div>
                    Developed by{' '}
                    <a
                        href="https://sohammondal.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Soham Mondal
                    </a>
                </div>
            </Copyright>
        </Container>
    )
}
