import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { pageSectionIds } from '../../constants'

const Container = styled.div`
    display: flex;
`

const SideBar = styled.div`
    flex-basis: 30%;
    background: #00b8f0;
    padding: 20px;
`
const Main = styled.div`
    flex-basis: 70%;
    background: #a0a0a0;
    section {
        height: 100vh;
        padding: 50px;
    }
`

interface State {
    section: string
}

export const FAQ: React.FC = () => {
    const location = useLocation()
    const state = location.state as State

    React.useEffect(() => {
        if (!state) return
        const section = document.getElementById(state.section)
        section &&
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            })
    }, [state])

    return (
        <Container>
            <SideBar>sidebar</SideBar>
            <Main>
                <section id={pageSectionIds.FAQ.faq}>
                    <h1>FAQ</h1>
                </section>
                <section id={pageSectionIds.FAQ.termsOfService}>
                    <h1>Terms of use</h1>
                </section>
                <section id={pageSectionIds.FAQ.privacyPolicy}>
                    <h1>Privacy Policy</h1>
                </section>
            </Main>
        </Container>
    )
}
