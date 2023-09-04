import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/logo.png" />
          <link rel="icon" href="/logo.png" />
          <link rel="favicon" href="/logo.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          {/* <InitializeColorMode /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
