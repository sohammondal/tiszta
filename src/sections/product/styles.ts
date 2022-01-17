import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

import { flexRowCenter } from 'theme'

export const Container = styled.div`
    main {
        padding: 5%;
        ${flexRowCenter}
        flex-flow: wrap;
        align-items: flex-start;
        justify-content: space-evenly;
        section {
            flex-basis: 90%;

            h1 {
                margin-top: 0;
                margin-bottom: 2rem;
            }

            p > * {
                margin: 10px 0;
            }

            :nth-child(1) {
                img {
                    width: 18rem;
                    height: 18rem;
                    @media only screen and (min-width: 1024px) {
                        width: 25rem;
                        height: 25rem;
                    }
                }

                @media only screen and (min-width: 1024px) {
                    display: flex;
                    justify-content: center;
                }
            }

            :nth-child(2) {
                margin-top: 3rem;

                @media only screen and (min-width: 1024px) {
                    margin-top: 0;
                }
            }

            @media only screen and (min-width: 1024px) {
                flex-basis: 45%;
            }
        }
    }

    /* overrides */
    .burger-button {
        span {
            background: black;
        }
    }

    .navbar {
        position: unset;
    }

    .tiszta-logo {
        fill: blue;
    }
`

export const PSkeleton = styled(Skeleton)`
    margin: 5px 0px;
`
export const ImgSkeleton = styled(Skeleton)`
    width: 18rem;
    height: 18rem;
    @media only screen and (min-width: 1024px) {
        width: 25rem;
        height: 25rem;
    }
`
