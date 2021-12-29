import styled from 'styled-components'

export const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        > * {
            margin: 10px 0px;
        }

        input,
        textarea {
            width: 14.375rem;
            height: auto;
            padding: 15px;
            border: 1px none #000;
            border-radius: 0px;
            color: #7c7c7c;
            font-family: QuicksandMedium;
            font-weight: 400;

            :focus {
                border: none;
                outline: none;
            }
        }

        textarea {
            height: 5rem;
            resize: none;
        }

        button {
            width: 100%;
            width: 100%;
            padding: 15px;
            border-radius: 0px;
            background-color: #001a6f;
            transition: background-color 200ms ease;
            font-family: QuicksandMedium;
            font-weight: 900;
            text-align: center;
            letter-spacing: 5px;
            text-transform: uppercase;
            cursor: pointer;
            color: #ffffff;
        }
    }
`
