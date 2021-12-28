import styled from 'styled-components'

import { flexColCenter, flexRowCenter } from 'theme'

export const Container = styled.section`
    height: 72vh;
    ${flexColCenter}
    @media only screen and (min-width: 1024px) {
        ${flexRowCenter}
    }
`

export const Section = styled.div`
    padding: 20px 45px;
    flex-basis: 50%;
    height: 100%;

    :nth-child(2) {
        background-color: #fafafa;
    }

    h1 {
        width: 100%;
        font-size: 36px;
    }

    p {
        line-height: 25px;
    }

    img {
        width: 100%;
    }
    @media only screen and (min-width: 1024px) {
        padding: 0 45px;
        height: 100%;
        ${flexColCenter}
    }
`
