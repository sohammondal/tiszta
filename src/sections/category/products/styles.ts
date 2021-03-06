import styled, { css } from 'styled-components'

import { flexColCenter, flexRowCenter } from 'theme'

export const Container = styled.main`
    margin-bottom: 15px;
`

export const Description = styled.article`
    padding: 1% 15%;
    background-color: #f8f5f5;
    cursor: default;
    margin-bottom: 20px;

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
    }
`

export const ProductsContainer = styled.div`
    ${flexRowCenter}
    flex-flow: wrap;
    justify-content: center;

    @media only screen and (min-width: 1024px) {
        padding: 1% 4%;
    }
`

export const ProductItem = styled.div<{ hover?: boolean }>`
    flex-basis: 33%;
    margin: 30px 0px;
    ${flexColCenter}

    div {
        ${flexColCenter}
        width: max-content;

        ${(props) =>
            props.hover &&
            css`
                cursor: pointer;
                :hover {
                    transform: scale(1.1);
                    transition: 0.3s;
                }
            `}

        img {
            width: 300px;
            height: 300px;
        }

        span {
            margin-top: 15px;
            text-align: center;
            width: 100%;
        }

        @media only screen and (min-width: 1024px) {
        }
    }
`
