import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: AlegreyaSans;
        src: url('/assets/fonts/AlegreyaSans-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: AngellaWhite;
        src: url('/assets/fonts/AngellaWhite.otf');
    }

    @font-face {
        font-family: Quicksand;
        src: url('/assets/fonts/Quicksand-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: QuicksandMedium;
        src: url('/assets/fonts/Quicksand-Medium.ttf') format('truetype');
    }

    :root{}

    body {
        margin: 0;
        padding: 0;
        font-family: QuicksandMedium, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`
