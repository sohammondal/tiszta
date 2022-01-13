import React from 'react'

import { HamburgerMenu, Logo } from 'components'

import { Nav, LogoWrapper, StyledLink, Categories } from './styles'

const items = [
    {
        to: '/category',
        title: 'All Products',
    },
    {
        to: '/category/home-care',
        title: 'Home care',
    },
    {
        to: '/category/personal-care',
        title: 'Personal Care',
    },
]

export const NavBar: React.FC = () => {
    return (
        <Nav>
            <LogoWrapper>
                <Logo variant="lg" scaleOnHover fill="#ffffff" />
            </LogoWrapper>
            <Categories>
                <ul>
                    {items.map((item) => (
                        <li key={item.to}>
                            <StyledLink to={item.to}>{item.title}</StyledLink>
                        </li>
                    ))}
                </ul>
            </Categories>
            <HamburgerMenu
                items={items.map((item) => (
                    <StyledLink key={item.to} to={item.to}>
                        {item.title}
                    </StyledLink>
                ))}
            />
        </Nav>
    )
}
