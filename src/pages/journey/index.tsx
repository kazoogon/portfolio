import { NextPage } from 'next'
import { createRef, useEffect } from 'react'
import ServiceJourney from './serviceJourney'
import styled from 'styled-components'

export const Index: NextPage = () => {
  const appRef = createRef<HTMLDivElement>()
  const canvasRef = createRef<HTMLDivElement>()
  useEffect(() => {
    new ServiceJourney(appRef, canvasRef)
  }, [])

  return (
    <Worldmap ref={appRef}>
      <Canvas ref={canvasRef} />
    </Worldmap>
  )
}

const Worldmap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Canvas = styled.div`
  position: absolute;
  background-image: radial-gradient(#182b34, #2d1d34);
`

export default Index
