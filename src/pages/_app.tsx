/* eslint-disable react/prop-types */
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { useAppContext } from 'context'
import { GlobalStyles } from 'theme'

import 'react-loading-skeleton/dist/skeleton.css'

export default function App({ Component, pageProps }: AppProps) {
    const { theme } = useAppContext()

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Tiszta</title>
            </Head>
            <ThemeProvider theme={theme || ({} as DefaultTheme)}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
