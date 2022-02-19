import { NextPage } from 'next'
import styled, { css } from 'styled-components'
import { newsData } from '../../components/journey/data/newsData'
import Image from 'next/image'
import { useContext } from 'react'
import { selectedNewsContext } from './index'

export const NewsModal: NextPage = () => {
  const { selectedNews, setSelectedNews } = useContext(selectedNewsContext)
  const closeModalOutsideNewsArea = (e: any): void => {
    e.target === e.currentTarget && setSelectedNews(null)
  }
  return (
    <>
      <FullScreen
        selectedNews={selectedNews}
        onClick={(e) => closeModalOutsideNewsArea(e)}
      />
      <ModalWrapper selectedNews={selectedNews}>
        {selectedNews !== null && selectedNews !== undefined && (
          <>
            <Country>
              <Image
                src={`/journey/flag/${newsData[selectedNews].country}.svg`}
                width={15}
                height={25}
              />
              <CountryName>{newsData[selectedNews].country}</CountryName>
            </Country>
            <Title>{newsData[selectedNews].title}</Title>
            <Desc>{newsData[selectedNews].desc}</Desc>
          </>
        )}
      </ModalWrapper>
    </>
  )
}

// To close modal  when user click outside modal
const FullScreen = styled.div<{ selectedNews: number | null }>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: 1;
  transition: 3s;
  ${({ selectedNews }) =>
    selectedNews === null &&
    css`
      height: 0;
      width: 0;
      opacity: 0;
      transition: 3s;
    `}
`
const ModalWrapper = styled.div<{ selectedNews: number | null }>`
  z-index: 1;
  position: absolute;
  top: 50%;
  right: -500px;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white; // TODO: tmp
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  font-weight: bold;
  transition: 0.7s opacity ease-out;
  max-height: 500px;
  overflow: scroll;

  // TODO: these code need to move in other share file
  ::-webkit-scrollbar {
    width: 3px;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background: #182b34;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1f443b;
  }
  ${({ selectedNews }) =>
    selectedNews !== null &&
    css`
      right: 80px;
      opacity: 1;
    `}
`

const Country = styled.div`
  font-size: 1rem;
  display: flex;
`
const CountryName = styled.div`
  margin-left: 5px;
`
const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`
const Desc = styled.div`
  font-size: 1.5rem;
  // to recognize new line code in json "¥¥n" in React.js
  white-space: pre-line;
  user-select: none;
`

export default NewsModal
