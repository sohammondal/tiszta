import React from 'react'
import { useLocation } from 'react-router-dom'

import { FAQs } from './FAQs'
import { SideBar } from './Sidebar'
import { Container, Main } from './styles'

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
            <SideBar />
            <Main>
                <FAQs />
            </Main>
        </Container>
    )
}
