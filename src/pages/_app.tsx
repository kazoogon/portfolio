import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyle'
import Link from 'next/link'
import TitleSvg from '../assets/kaziu.svg'
import { useEffect, useReducer } from 'react'
import { AppProps } from 'next/app'
import Loading from '~/src/components/loading'

const Application = ({ pageProps, Component }: AppProps) => {
  const [isLoading, setIsLoading] = useReducer((prev) => !prev, true)
  const LOADING_TIME = 3000

  useEffect(() => {
    setTimeout(() => {
      setIsLoading()
    }, LOADING_TIME)
  }, [])

  return (
    <>
      <Loading isLoading={isLoading} />
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
