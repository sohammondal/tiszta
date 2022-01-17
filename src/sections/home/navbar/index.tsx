import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { HamburgerMenu, Logo } from 'components'
import { scrollTo } from 'helpers'

import { Nav, LogoWrapper, StyledLink } from './styles'

import { pageSectionIds } from '../../../constants'

export const NavBar: React.FC = () => {
    const { pathname } = useRouter()
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
                    <Link
                        key="/about"
                        href={`/?section=${pageSectionIds.HOME.about}`}
                        as="/"
                    >
                        <StyledLink
                            href="/"
                            onClick={(e) => {
                                if (pathname === '/') {
                                    e.preventDefault()
                                    scrollTo(pageSectionIds.HOME.about)
                                    return
                                }
                            }}
                        >
                            About
                        </StyledLink>
                    </Link>,
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
