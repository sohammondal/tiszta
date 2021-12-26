import { DefaultTheme } from 'styled-components'

import { colors } from './colors'
import { Themes } from './types'

export * from './types'

export { GlobalStyles } from './global.styles'

export const theme: DefaultTheme = {
    colors,
    mode: Themes.LIGHT,
}
