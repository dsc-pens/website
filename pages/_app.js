import '../stylesheets/style.scss'

import { PageTransition } from 'next-page-transitions'
import NextSEO from 'next-seo'
import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

import Navbar from '../components/Navbar'

export default class extends App {
  /** @param {import('next/app').AppComponentContext} context */
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={require('../static/apple-touch-icon.png')}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href={require('../static/favicon-32x32.png')}
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href={require('../static/favicon-16x16.png')}
          />
          <link rel='manifest' href='/static/site.webmanifest' />
          <link
            rel='mask-icon'
            href={require('../static/safari-pinned-tab.svg')}
            color='#4887f4'
          />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <meta name='msapplication-TileColor' content='#4887f4' />
          <meta
            name='msapplication-config'
            content='/static/browserconfig.xml'
          />
          <meta name='theme-color' content='#4887f4' />
        </Head>

        <NextSEO config={require('../next-seo.config')} />

        <div className='dsc-container'>
          <Navbar />
          <PageTransition timeout={200} classNames='page-transition'>
            <Component {...pageProps} />
          </PageTransition>
        </div>

        <style global jsx>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        `}</style>
      </Container>
    )
  }
}
