import Link from 'next/link'
import React from 'react'

import { HamburgerMenu, Logo } from 'components'
import { scrollTo } from 'helpers'

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
                    <Link href="/category" key="/category" passHref>
                        <StyledLink>Products</StyledLink>
                    </Link>,
                    <StyledLink
                        key="/about"
                        href="/"
                        onClick={() => {
                            setTimeout(() => {
                                scrollTo(pageSectionIds.HOME.about)
                            })
                        }}
                    >
                        About
                    </StyledLink>,
                    <StyledLink
                        key="/contact"
                        onClick={() => {
                            scrollTo(pageSectionIds.HOME.contactUs)
                        }}
                    >
                        Contact
                    </StyledLink>,
                ]}
            />
        </Nav>
    )
}
