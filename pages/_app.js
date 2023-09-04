import NextApp from 'next/app'
import * as React from 'react'

import theme from '@hackclub/theme'
import '@hackclub/theme/fonts/reg-bold.css'
import "../styles/globals.scss"

theme.mode = "light";
theme.colors.primary = '#375F3D';
theme.colors.secondary = '#8BCCEE';

theme.colors.green = '#46764D';

theme.fonts = {
  heading: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
  body: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
  monospace: "\"SF Mono\", \"Roboto Mono\", Menlo, Consolas, monospace"
};

theme.text.eyebrow.fontFamily = '"Phantom Sans"';

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
