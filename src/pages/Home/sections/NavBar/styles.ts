import Link from 'next/link'
import styled from 'styled-components'

import { flexRowCenter } from 'theme'

export const Nav = styled.nav`
    padding: 1.25rem 1.5rem;
    position: absolute;
    width: -webkit-fill-available;
    z-index: 2;
    ${flexRowCenter}
    justify-content: space-between;

    @media only screen and (min-width: 1024px) {
        padding: 1.25rem 2.5rem;
    }
`

export const LogoWrapper = styled.div`
    width: 60px;
    height: 60px;
`

export const StyledLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
`
