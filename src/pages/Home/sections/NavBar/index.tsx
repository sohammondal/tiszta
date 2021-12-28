import React from 'react'

import { HamburgerMenu, Logo } from 'components'

import { Nav, LogoWrapper, StyledLink } from './styles'

export const NavBar: React.FC = () => {
    return (
        <Nav>
            <LogoWrapper>
                <Logo variant="lg" scaleOnHover fill="#fff" />
            </LogoWrapper>
            <HamburgerMenu
                items={[
                    <StyledLink to="/products" key="/products">
                        Products
                    </StyledLink>,
                    <StyledLink to="/" key="/about">
                        About
                    </StyledLink>,
                    <StyledLink to="/" key="/contact">
                        Contact
                    </StyledLink>,
                ]}
            />
        </Nav>
    )
}
