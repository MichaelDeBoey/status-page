import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './utils/global'

const Main = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
)

ReactDOM.render(<Main />, document.getElementById('root'))
