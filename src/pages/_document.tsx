import Document, { Head, Html, Main, NextScript } from 'next/document'

const fontFamilies = [
  `family=Noto+Sans+JP:wght@300;400;500;700;900`,
  `family=Oswald:wght@400;500;600;700`,
  `family=Montserrat:wght@600;700;900`,
  `display=swap`,
]

const fontIcons = [`Material+Icons`, `Material+Icons+Outlined`]

// class Document extends NextDocument {
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/assets/icons/icon.png'></link>
          <meta name='theme-color' content='#000' />

          <link
            href={`https://fonts.googleapis.com/icon?family=${fontIcons.join(
              '%7C',
            )}`}
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href={`https://fonts.googleapis.com/css2?${fontFamilies.join('&')}`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
