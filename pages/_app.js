import NextApp from 'next/app'
import * as React from 'react'

import '@hackclub/theme/fonts/reg-bold.css'
import "../styles/globals.scss"

import theme from "../lib/theme";

import { ThemeProvider } from 'theme-ui'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {/* <ColorSwitcher /> */}
      </ThemeProvider>
    )
  }
}
