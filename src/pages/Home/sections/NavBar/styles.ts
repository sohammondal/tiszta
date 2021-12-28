import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { flexRowCenter } from 'theme'

export const Nav = styled.nav`
    padding: 1.25rem 1.5rem;
    ${flexRowCenter}
    justify-content: space-between;
    background-color: #000;

    @media only screen and (min-width: 1024px) {
        padding: 1.25rem 2.5rem;
    }
`

export const LogoWrapper = styled.div`
    width: 60px;
    height: 60px;
`

export const StyledLink = styled(Link)`
    color: #fff;
    font-size: 1.5rem;
`
