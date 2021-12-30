import styled from 'styled-components'

import { flexColCenter, flexRowCenter } from 'theme'

export const Container = styled.footer`
    padding: 45px;
    background-color: #ff8400;
    color: white;
    ${flexColCenter}
    justify-content: space-around;
    @media only screen and (min-width: 1024px) {
        height: 70vh;
        padding: 45px;
        text-align: center;
    }
`
export const Section = styled.section`
    ${flexColCenter}
    align-items: flex-start;
    width: 100%;

    > * {
        margin-bottom: 50px;
    }

    @media only screen and (min-width: 1024px) {
        ${flexRowCenter}
        justify-content: space-around;
        > * {
            margin-bottom: 0;
        }
    }
`

export const Copyright = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;

    div:nth-child(1) {
        text-align: end;
    }
`

export const LogoWrapper = styled.div`
    width: 125px;
    height: 125px;
`
