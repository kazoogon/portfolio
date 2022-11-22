import type { NextPage } from 'next'
import Index from './journey'
import Github from '../assets/github.svg'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <Index />
      {/*<Link href="/journey">journey</Link>*/}
      <IconWrapper>
        <a
          target="_blank"
          href="https://github.com/kazoogon/portfolio"
          rel="noreferrer"
        >
          <Github />
        </a>
      </IconWrapper>
    </>
  )
}

const IconWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  cursor: pointer;
  z-index: 3;

  svg {
    width: 30px;
    height: 30px;
  }
`
export default Home
