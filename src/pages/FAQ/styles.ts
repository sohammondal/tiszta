import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
`

export const Main = styled.div`
    width: 100%;
    background-color: #f8f8f8;

    section {
        min-height: 100vh;
        padding: 30px;
    }

    @media only screen and (min-width: 1024px) {
        section {
            padding: 50px;
        }
    }
`
