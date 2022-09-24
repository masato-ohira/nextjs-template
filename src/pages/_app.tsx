import '@/styles/app.scss'
import type { AppProps } from 'next/app'
import { store } from '@/store/index'
import { Provider } from 'react-redux'
import Layout from '@/layouts/default'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
