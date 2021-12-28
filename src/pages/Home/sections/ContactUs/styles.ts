import styled from 'styled-components'

import { flexColCenter, flexRowCenter } from 'theme'

export const Container = styled.footer`
    height: 70vh;
    padding: 45px;
    background-color: #ff8400;
    color: white;
    text-align: center;
    ${flexColCenter}
    justify-content: space-around;
    @media only screen and (min-width: 1024px) {
    }
`
export const Section = styled.section`
    ${flexRowCenter}
    justify-content: space-around;
    width: 100%;
`

export const Copyright = styled.div``

export const LogoWrapper = styled.div`
    width: 125px;
    height: 125px;
`
