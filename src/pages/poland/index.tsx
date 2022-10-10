import { NextPage } from 'next'
// import PolskaMap from '../../assets/polska_dot_map.svg'
import PolskaMap from '../../assets/polska_dot_map_1.svg'
import styled from 'styled-components'
import { useEffect } from 'react'
import gsap from 'gsap'

export const Index: NextPage = () => {
  useEffect(() => {
    let circles = document.querySelectorAll('circle')
    function generatePoints() {
      gsap.set(
        circles[1],
        {
          fill: 'green',
          cx: 80,
          cy: 5,
          scale: 3,
        },
      )
      gsap.to(
        circles[1],
        {
          fill: 'green',
          cx: 0,
          cy: 0,
          duration: 1,
          scale: 1,
          // delay: (delay + pointLength) * 0.002,
          delay: 0.5,
          ease: 'power2.out',
        },
      )
    }
    window.addEventListener('click', () => {
      generatePoints()
    })
    generatePoints()
  })
  return (
    <Container>
      <BgText>
        Jeszcze Polska nie zginęła, Kiedy my zyjemy. Co nam obca przemoc wzięła,
        Szablą odbierzemy. Marsz, marsz Dąbrowski, Z ziemi włoskiej do Polski,
        Za twoim przewodem Złączym się z narodem
      </BgText>
      <MapWrapper>
        <PolskaMap />
      </MapWrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: radial-gradient(
    #182b34,
    #2d1d34
  ); // TODO: manage colors somewhere
`

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    display: block;
    width: 975px; // TODO: ** wanna use as 100%
    height: 100%;
    opacity: 0.8;
    scale: 0.8;

    .city {
      cursor: pointer;
    }
  }
`

const BgText = styled.span`
  font-size: 150px;
  font-weight: bold;
  opacity: 0.03;
  color: #00ffa7;
  word-break: break-all;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`
export default Index
