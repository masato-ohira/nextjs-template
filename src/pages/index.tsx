import type { NextPage } from 'next'
import Head from 'next/head'
import { css } from '@emotion/react'
import { colors, mq } from '@/styles/cmn.styles'
import { useSelector } from 'react-redux'
import { siteData } from '@/store/site'
import useFetch from '@/hooks/useFetch'
import LoaderContent from '@/components/loader-content'

const Home: NextPage = () => {
  const { name: siteName } = useSelector(siteData)
  const styles = {
    container: css`
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
    `,
  }

  const url = `https://jsonplaceholder.typicode.com/todos`
  const { data, isLoading, error } = useFetch(url, {})

  if (isLoading) return <LoaderContent />
  if (error) return <p>{'An error has occurred: ' + error.message}</p>

  return (
    <>
      <Head>
        <title>{siteName}</title>
      </Head>
      <div className='container' css={styles.container}>
        <div className='title is-5 has-text-centered'>{siteName}</div>
        <table className='table is-bordered is-fullwidth'>
          <tbody>
            {data.map((i: any, key: number) => {
              return (
                <tr key={key}>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
