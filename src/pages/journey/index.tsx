import { NextPage } from 'next'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import ServiceJourney from '../../components/journey/serviceJourney'
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
        <Message>Move cursor on orange mark 👆</Message>
      </Worldmap>
    </selectedNewsContext.Provider>
  )
}

const Worldmap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  // from here styles of three.js part
  div[class^='desc-visible'] {
    font-family: 'Quantico', sans-serif;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 20px;
    color: #00ffa7;
    box-shadow: 0 4px 16px 0 rgba(#00ffa7, 0.4);
    z-index: 1000;
  }

  div[class^='name-visible'] {
    font-family: 'Segoe UI Black', sans-serif;
    font-size: 50px;
    font-weight: bold;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  //JSで指定すると上手くいかないので、とりあえずscssで指定
  //japan
  .name-visible0 {
    background: linear-gradient(45deg, #e20112, #fff);
  }

  //spain
  .name-visible1 {
    background: linear-gradient(0deg, #e00011, #f8db09, #e00011);
  }

  //uk
  .name-visible2 {
    background: linear-gradient(0deg, #c3102d, #fff, #012066);
  }

  //germaney
  .name-visible3 {
    background: linear-gradient(0deg, #f8c800, #d70000, #000);
  }

  //poland
  .name-visible4 {
    background: linear-gradient(0deg, #e00011, #fff);
  }

  //ukraine
  .name-visible5 {
    background: linear-gradient(0deg, #ffd500, #52c3f1);
  }

  //mexico
  .name-visible6 {
    background: linear-gradient(0deg, #006847, #fff, #ce1126);
  }

  //guatemala
  .name-visible7 {
    background: linear-gradient(0deg, #4997d0, #fff, #4997d0);
  }

  //peru
  .name-visible8 {
    background: linear-gradient(0deg, #e60012, #fff, #e60012);
  }

  //bolivia
  .name-visible9 {
    background: linear-gradient(0deg, #e60012, #fff100, #009944);
  }

  //chile
  .name-visible10 {
    background: linear-gradient(0deg, #0055a2, #fff, #e60012);
  }

  //argentina
  .name-visible11 {
    background: linear-gradient(0deg, #74acdf, #fff, #74acdf);
  }

  //uruguay
  .name-visible12 {
    background: linear-gradient(0deg, #fff, #0038a8);
  }

  img[class^='pic-visible'] {
    object-fit: cover;
    border-radius: 50%;
    filter: brightness(80%);
    background: #1d2739;
    border: white 5px solid;
    box-shadow: 0 4px 16px 0 rgba(0, 255, 167, 0.4);
  }

  img[class^='flag-visible'] {
    border-radius: 4px;
    z-index: 1000;
  }

  .pic-text {
    color: #fff;
    z-index: 100;
  }
`
const Canvas = styled.div<{
  openNewsModal: number | null
}>`
  position: absolute;
  background-image: radial-gradient(#182b34, #2d1d34);
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
  @media screen and (max-width: 959px) {
    display: none;
  }
`
const DarkFullScreen = styled.div<{ openNewsModal: number | null }>`
  z-index: 0;
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  transition: opacity 2s;
  ${({ openNewsModal }) =>
    openNewsModal !== null &&
    css`
      background: rgba(40, 33, 52, 0.6); //TODO : DRY news list bg
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: opacity 2s;
    `}  }
`

const Message = styled.div`
  color: coral;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.6;
`

export default Index
