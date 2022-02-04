import { NextPage } from 'next'
import styled, { css } from 'styled-components'
import { newsData } from './data/newsData'
import Image from 'next/image'
import { useContext } from 'react'
import { selectedNewsContext } from './index'

export const NewsModal: NextPage = () => {
  const { selectedNews, setSelectedNews } = useContext(selectedNewsContext)
  const closeModalOutsideNewsArea = (e: MouseEvent): void => {
    e.target === e.currentTarget && setSelectedNews(null)
  }
  return (
    <>
      <FullScreen
        selectedNews={selectedNews}
        onClick={(e: MouseEvent) => closeModalOutsideNewsArea(e)}
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
  ${({ selectedNews }) =>
    selectedNews === null &&
    css`
      display: none;
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
`
const Desc = styled.div`
  font-size: 1.5rem;
`

export default NewsModal
