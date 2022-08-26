import type { NextPage } from 'next'
import Head from 'next/head'
// import _ from 'lodash'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>my-app</title>
      </Head>
      <div className='container'>
        <div className='box'>
          <div className='buttons is-centered'>
            <div className='button'>BUTTON</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 15px;
        }
      `}</style>
    </>
  )
}

export default Home
