// styled.d.ts
import 'styled-components'
import { Colors, Themes } from './theme/colors'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors
        mode: Themes.DARK | Themes.LIGHT
    }
}
