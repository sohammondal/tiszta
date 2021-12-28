import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppProvider, useAppContext } from 'context'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyles } from './theme'

const Index = () => {
    const { theme } = useAppContext()

    if (!theme) return null

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <Index />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
