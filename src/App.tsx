import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
)
