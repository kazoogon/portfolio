import { NextPage } from 'next'
// import PolskaMap from '../../assets/polska_dot_map.svg'
import PolskaMap from '../../assets/polska_dot_map_1.svg'
import styled from 'styled-components'
import { useEffect } from 'react'
import gsap from 'gsap'

export const Index: NextPage = () => {
  useEffect(() => {
    // ref: https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/
    let circles = document.querySelectorAll('circle')
    const pointLength = Math.random() * length

    function generatePoints(i: number) {
      const originalColor = circles[i].getAttribute('fill')
      const point = circles[i].getPointAtLength(pointLength)

      gsap.set(circles[i], {
        fill: 'green',
        cx: point.x + (Math.random() - 0.5) * 60,
        cy: point.y + (Math.random() - 0.5) * 60,
        scale: Math.floor(Math.random() * 6),
      })

      gsap.to(circles[i], {
        // originalColor returns string or null, so need to write like that
        //  even though there is no "null" in this case
        fill: originalColor ? originalColor : 'fff',
        cx: 0,
        cy: 0,
        duration: 5,
        scale: 1,
        // delay: (delay + pointLength) * 0.002,
        delay: 1.5,
        ease: 'power2.out',
      })
    }

    circles.forEach((circle: SVGCircleElement, i: number) => generatePoints(i))
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
    opacity: 0.7;
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
