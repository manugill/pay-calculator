import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import '../misc/globalStyles'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const styles = (
      <style
        dangerouslySetInnerHTML={{
          __html: styleSheet.rules().map((rule) => rule.cssText).join('\n')
        }}
      />
    )
    return { ...renderPage(), styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Pay Calculator</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Raleway:400,500'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
