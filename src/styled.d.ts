import {} from 'styled-components'
import { Theme } from 'styles/theme'
import { TypographyVariantProps } from 'types/typographyType'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    typography: Record<string, TypographyVariantProps>
  }
}
