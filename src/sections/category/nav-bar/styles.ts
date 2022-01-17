import styled from 'styled-components'

import { flexRowCenter } from 'theme'

export const Nav = styled.nav`
    padding: 1.25rem 1.5rem;
    ${flexRowCenter}
    justify-content: space-between;
    background-color: #0796c3;
    box-shadow: 1px 1px 20px 0 rgb(0 0 0 / 22%);

    @media only screen and (min-width: 1024px) {
        padding: 1.25rem 10rem;
        .burger-button {
            display: none;
        }
    }
`

export const LogoWrapper = styled.div`
    width: 60px;
    height: 60px;
`

export const StyledLink = styled.a`
    color: #fff;
    font-size: 1.4rem;
`

export const HamburgerWrapper = styled.div``

export const NavLinks = styled.div``

export const Categories = styled.div`
    ul {
        display: none;
    }

    @media only screen and (min-width: 1024px) {
        ul {
            display: block;
            list-style-type: none;
            margin: 0;
            padding: 0;
            li {
                margin: 0px 15px;
                float: left;
            }
        }
    }
`
