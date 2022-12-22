import type { AppProps } from 'next/app'
import { store } from '@/store/index'
import { css, Global } from '@emotion/react'
import { rgba } from '@/styles/colors'
import { fonts } from '@/styles/fonts'

import { Provider } from 'react-redux'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head'

const globalStyle = css`
  html,
  body {
    min-height: 100%;
    margin-bottom: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    -webkit-text-size-adjust: 100%;
  }

  main {
    display: block;
  }
`
const theme = extendTheme({
  fonts: {
    heading: `${fonts.sans}`,
    body: `${fonts.sans}`,
  },
  colors: {
    link: {
      50: `${rgba('#00B2E8', 0.2)}`,
      100: `${rgba('#00B2E8', 0.3)}`,
      200: `${rgba('#00B2E8', 0.4)}`,
      300: `${rgba('#00B2E8', 0.5)}`,
      400: `${rgba('#00B2E8', 0.6)}`,
      500: `${rgba('#00B2E8', 0.7)}`,
      600: `${rgba('#00B2E8', 0.8)}`,
      700: `${rgba('#00B2E8', 0.9)}`,
      800: `${rgba('#00B2E8', 0.95)}`,
      900: `${rgba('#00B2E8', 1)}`,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle}></Global>
      <Provider store={store}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,viewport-fit=cover'
          />
          <meta
            name='format-detection'
            data-hid='format-detection'
            content='telephone=no,address=no,email=no'
          />
        </Head>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  )
}

export default MyApp
