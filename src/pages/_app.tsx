import styled from 'styled-components'
import GlobalStyle from '~/src/styles/globalStyle'
import Link from 'next/link'
import TitleSvg from '@/kaziu.svg'
import { useEffect, useReducer } from 'react'
import { AppProps } from 'next/app'
import Loading from '~/src/components/loading'
import { LOADING_TIME } from '~/src/utils/const'

const Application = ({ pageProps, Component }: AppProps) => {
  const [isLoading, setIsLoading] = useReducer((prev) => !prev, true)

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
          <SubTitle>My backpacker&apos;s map</SubTitle>
        </StyledTitle>
      </Link>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const StyledTitle = styled.div`
  width: 7rem;
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

const SubTitle = styled.div`
  font-size: 0.7rem;
  font-family: monospace;
  color: #b0b0b0;
  white-space: nowrap;
`

export default Application
