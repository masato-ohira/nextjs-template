import type { NextPage } from 'next'
import Head from 'next/head'
import { css } from '@emotion/react'
import { colors, mq } from '@/styles/cmn.styles'
import { useSelector } from 'react-redux'
import { siteData } from '@/store/site'

const styles = () => {
  return css`
    .box {
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0;

      .button {
        background-color: ${colors.link};
        border-color: ${colors.link};
        color: #fff;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: linear;

        ${mq('lg')} {
          background-color: ${colors.primary};
          border-color: ${colors.primary};
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  `
}

const Home: NextPage = () => {
  const { name: siteName } = useSelector(siteData)

  return (
    <>
      <Head>
        <title>{siteName}</title>
      </Head>
      <div className='container' css={styles()}>
        <div className='box'>
          <div className='title is-5 has-text-centered'>{siteName}</div>
          <div className='buttons is-centered'>
            <div className='button'>BUTTON</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
