import { NextPage } from 'next'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import ServiceJourney from './serviceJourney'
import styled, { css } from 'styled-components'
import News from './news'
import NewsModal from './newsModal'

export const selectedNewsContext = createContext(
  {} as {
    selectedNews: number | null
    setSelectedNews: Dispatch<SetStateAction<number | null>>
  },
)

export const Index: NextPage = () => {
  const appRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [selectedNews, setSelectedNews] = useState<number | null>(null)
  useEffect(() => {
    new ServiceJourney(appRef, canvasRef)
  }, [])

  return (
    <selectedNewsContext.Provider value={{ selectedNews, setSelectedNews }}>
      <Worldmap ref={appRef}>
        <Canvas ref={canvasRef} openNewsModal={selectedNews} />
        <NewsWrapper>
          <News />
        </NewsWrapper>
        <NewsModal />
        <DarkFullScreen openNewsModal={selectedNews} />
      </Worldmap>
    </selectedNewsContext.Provider>
  )
}

const Worldmap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Canvas = styled.div<{
  openNewsModal: number | null
}>`
  position: absolute;
  background-image: radial-gradient(#182b34, #2d1d34);
  animation: .5s all ease-out;
  ${({ openNewsModal }) =>
    openNewsModal !== null &&
    css`
      // NOTE: To remove white border from blurry bg
      // https://dev.to/nazanin_ashrafi/remove-white-border-from-blurry-background-image-3d8j
      :before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(5px);
      }
    `}  }
`

const NewsWrapper = styled.div`
  z-index: 2;
  position: absolute;
  right: 0;
  top: 100px;
  margin: 20px;
  padding: 5px;
  max-width: 300px;
  height: 70%; // to use overflow: scroll:
  //background: rgba(40, 33, 52, 0.2); //TODO : DRY with modal
`
const DarkFullScreen = styled.div<{ openNewsModal: number | null }>`
  z-index: 0;
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  animation: 0.5s all ease-out;
  ${({ openNewsModal }) =>
    openNewsModal !== null &&
    css`
      background: rgba(40, 33, 52, 0.6); //TODO : DRY news list bg
      width: 100%;
      height: 100%;
      opacity: 1;
    `}  }
`

export default Index
