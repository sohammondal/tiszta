import styled from 'styled-components'

import { flexColCenter } from 'theme'

export const Wrapper = styled.div`
    .Collapsible {
        overflow: hidden;
        min-width: 200px;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 3px 7px 0 rgb(0 0 0 / 3%);

        .Collapsible__trigger {
            display: flex;
            justify-content: space-between;
            transition: transform 0.3s;
            cursor: pointer;

            h3 {
                margin: 0;
                color: rgb(0, 26, 111);
                flex-basis: 90%;
            }

            span {
                ${flexColCenter}
                flex-basis: 2%;

                svg {
                    transition: transform 0.3s;
                }
            }
        }

        .is-open {
            svg {
                transform: rotate(180deg);
            }
        }

        .Collapsible__contentInner {
            font-weight: 400;
            cursor: default;
        }
    }
`
