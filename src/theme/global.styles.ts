import { createGlobalStyle } from 'styled-components'

import { Themes } from './types'

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

    :root{}

    body {
        margin: 0;
        padding: 0;
        font-family: Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 1.5s;
        background-color: ${({ theme }) =>
            theme.mode === Themes.DARK
                ? theme.colors.Black
                : theme.colors.BridalHealth}

    }

`
