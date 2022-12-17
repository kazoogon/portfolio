import { NextPage } from 'next'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import NewsSvg from '@/news.svg'
import { newsData, newsDataType } from '~/src/components/journey/data/newsData'
import { useContext } from 'react'
import { selectedNewsContext } from '~/src/pages/journey/index'

export const News: NextPage = () => {
  const { selectedNews, setSelectedNews } = useContext(selectedNewsContext)
  const newsLists = newsData.map((news: newsDataType) => (
    <NewsListWrapper
      key={news.index}
      onClick={() => {
        setSelectedNews(
          selectedNews == null || selectedNews !== news.index
            ? news.index
            : null,
        )
      }}
    >
      <NewsTitle>
        <Image
          src={`/journey/flag/${news.country}.svg`}
          width={15}
          height={25}
        />
        <Country>{news.country}</Country>
      </NewsTitle>
      <Content>
        <Sentence isSelected={news.index === selectedNews}>
          {news.title}
        </Sentence>
        <CountryImage>
          <Image
            src={`/journey/country/${news.country}.png`}
            width={50}
            height={50}
          />
        </CountryImage>
      </Content>
    </NewsListWrapper>
  ))

  return (
    <>
      <TitleWrapper>
        <NewsSvgWrapper>
          <NewsSvg />
        </NewsSvgWrapper>
        <Title>NEWS</Title>
      </TitleWrapper>
      <NewsListsWrapper>{newsLists}</NewsListsWrapper>
    </>
  )
}

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`
const NewsSvgWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`
const Title = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`

const NewsListsWrapper = styled.div`
  overflow: scroll;
  height: 100%;
  padding-right: 20px;

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
`
const NewsTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`
const Country = styled.div`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #2f917a;
`
const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  img {
    border-radius: 10px;
  }
`
const Sentence = styled.div<{ isSelected: boolean }>`
  font-size: 1.4rem;
  color: white;
  font-weight: bold;
  margin-right: 5px;
  user-select: none;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #2f917a;
    `}
`
const NewsListWrapper = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  &:hover ${Sentence} {
    transition: all 0.2s ease;
    color: #2f917a;
  }
`
const CountryImage = styled.div`
  min-width: 50px;
`

export default News
