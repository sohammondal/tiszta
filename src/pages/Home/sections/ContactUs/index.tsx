import React from 'react'

import { Logo } from 'components'

import { ContactFrom } from './ContactForm'
import { General } from './General'
import { Container, LogoWrapper, Section, Copyright } from './styles'

import { pageSectionIds } from '../../../../constants'

export const ContactUs: React.FC = () => {
    return (
        <Container id={pageSectionIds.HOME.contactUs}>
            <Section>
                <LogoWrapper>
                    <Logo fill="black" scaleOnHover disableClick />
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
