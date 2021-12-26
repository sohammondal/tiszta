import React from 'react'

import { Logo, ThemeToggler } from 'components'
import { useAppContext } from 'context'

import { Container, LogoWrapper, TogglerWrapper } from './App.styles'

function App(): React.ReactElement {
    const { isDark, toggleTheme } = useAppContext()

    return (
        <Container>
            <TogglerWrapper>
                <ThemeToggler onChange={toggleTheme} isDark={isDark} />
            </TogglerWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
        </Container>
    )
}

export default App
