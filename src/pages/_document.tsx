import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import { AppProvider } from 'context'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render(): React.ReactElement {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content="Tiszta Home & Personal Care"
                    />
                    <link rel="icon" href="/assets/images/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        href="/assets/images/logo192.png"
                    />
                </Head>
                <body>
                    <AppProvider>
                        <>
                            <Main />
                            <NextScript />
                        </>
                    </AppProvider>
                </body>
            </Html>
        )
    }
}
