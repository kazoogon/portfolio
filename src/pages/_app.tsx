import GlobalStyle from '../styles/globalStyle'
import { AppProps } from 'next/app'

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default Application
