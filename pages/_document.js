import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  /** @param {import('next/document').NextDocumentContext} ctx */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
