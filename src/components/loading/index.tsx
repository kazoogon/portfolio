import * as React from 'react'
import { useEffect, useReducer } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface ILoading {
  isLoading: boolean
}

const Loading: React.FC<ILoading> = ({ isLoading }) => {
  const [isVisible, setIsVisible] = useReducer((prev) => !prev, true)
  useEffect(() => {
    // opacity 0 then after that, need to "visible: hidden" to clickable whole display
    // (I think there is better way though)
    !isLoading && setTimeout(() => setIsVisible(), 1000)
  }, [isLoading])

  return (
    <Wrapper isLoading={isLoading} isVisible={isVisible}>
      <Text>
        <Char>K</Char>
        <Char>A</Char>
        <Char>Z</Char>
        <Char>I</Char>
        <Char>U</Char>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ isLoading: boolean; isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
  transition: opacity 2s;
  ${({ isLoading }) =>
    isLoading
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
  ${({ isVisible }) =>
    isVisible
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 100px;
`

const BlurTextKeyframe = keyframes`
  0% {filter: blur(0px);}
	100% {filter: blur(4px);}
`

const createTextAnimation = () => {
  let styles = []
  for (let i = 0; i < 5; i++) {
    styles.push(css`
      &:nth-child(${i + 1}) {
        filter: blur(0px);
        animation: ${BlurTextKeyframe} 1.5s ${i / 5}s infinite linear alternate;
      }
    `)
  }
  return styles
}

const Char = styled.span`
  display: inline-block;
  margin: 0 5px;
  color: #fff;
  font-family: 'Quattrocento Sans', sans-serif;
  ${createTextAnimation()}
`

export default Loading
