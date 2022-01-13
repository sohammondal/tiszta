import React from 'react'

import { HamburgerMenu, Logo } from 'components'

import { Nav, LogoWrapper, StyledLink } from './styles'

import { pageSectionIds } from '../../../../constants'

export const NavBar: React.FC = () => {
    return (
        <Nav className="navbar">
            <LogoWrapper>
                <Logo variant="lg" scaleOnHover fill="#fff" />
            </LogoWrapper>
            <HamburgerMenu
                items={[
                    <StyledLink to="/category" key="/category">
                        Products
                    </StyledLink>,
                    <StyledLink
                        to="/"
                        key="/about"
                        onClick={() => {
                            setTimeout(() => {
                                document
                                    .getElementById(pageSectionIds.HOME.about)
                                    ?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center',
                                        inline: 'center',
                                    })
                            })
                        }}
                    >
                        About
                    </StyledLink>,
                    <StyledLink
                        to={window.location.pathname}
                        key="/contact"
                        onClick={() => {
                            document
                                .getElementById(pageSectionIds.HOME.contactUs)
                                ?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center',
                                    inline: 'center',
                                })
                        }}
                    >
                        Contact
                    </StyledLink>,
                ]}
            />
        </Nav>
    )
}
