import GlobalStyle from '../styles/globalStyle'
import { AppProps } from 'next/app'
import Link from 'next/link'
import styled from 'styled-components'
import TitleSvg from '../assets/kaziu.svg'

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Link href="/">
        <StyledTitle>
          <TitleSvg />
        </StyledTitle>
      </Link>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const StyledTitle = styled.div`
  width: 6rem;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  cursor: pointer;
  svg {
    path {
      fill: azure;
    }
  }
`

export default Application
