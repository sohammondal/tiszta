import styled from 'styled-components'

export const Container = styled.section`
    flex-basis: 20%;
    background-color: #35b8ad;
    padding: 30px 20px;

    @media only screen and (min-width: 1024px) {
        padding: 30px 25px;
    }
`

export const Wrapper = styled.div`
    ul {
        margin: 50px 0 0 0;
        padding: 0;
        list-style-type: none;

        li {
            margin: 15px 0px;
            a {
                color: white;
                font-weight: bold;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        position: fixed;
        ul {
            margin: 100px 0;
        }
    }
`

export const LogoWrapper = styled.div`
    width: 100px;
    height: 100px;
`
