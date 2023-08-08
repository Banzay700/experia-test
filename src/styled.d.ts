import {} from 'styled-components'
import { Theme } from 'styles/baseTheme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
