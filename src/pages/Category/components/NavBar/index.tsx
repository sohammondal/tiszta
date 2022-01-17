import Link from 'next/link'
import React from 'react'

import { HamburgerMenu, Logo } from 'components'
import { ICategory } from 'types'

import { Nav, LogoWrapper, StyledLink, Categories } from './styles'

export const NavBar: React.FC<{ categories: ICategory[] }> = ({
    categories,
}) => {
    return (
        <Nav>
            <LogoWrapper>
                <Logo variant="lg" scaleOnHover fill="#ffffff" />
            </LogoWrapper>
            <Categories>
                <ul>
                    {categories?.map((category) => (
                        <li key={category.uuid}>
                            <Link
                                href={`/category/${category.uuid}`}
                                as={`/category/${category.slug}`}
                                passHref
                            >
                                <StyledLink>{category.name}</StyledLink>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Categories>
            <HamburgerMenu
                items={categories?.map((category) => (
                    <Link
                        key={category.uuid}
                        href={`/category/${category.uuid}`}
                        as={`/category/${category.slug}`}
                        passHref
                    >
                        <StyledLink>{category.name}</StyledLink>
                    </Link>
                ))}
            />
        </Nav>
    )
}
