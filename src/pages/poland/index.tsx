import { NextPage } from 'next'
// import PolskaMap from '../../assets/polska_dot_map.svg'
import PolskaMap from '../../assets/polska_dot_map_1.svg'
import styled from 'styled-components'
import { useEffect } from 'react'
import gsap from 'gsap'
// @ts-ignore (there is no type file)
import chroma from 'chroma-js'
import { POWER2_OUT } from './const'

export const Index: NextPage = () => {
  useEffect(() => {
    // ref: https://tympanus.net/codrops/2022/01/19/animate-anything-along-an-svg-path/
    const colors = chroma
      .scale(['#FF7900', '#F94E5D', '#CA4B8C', '#835698', '#445582', '#2F4858'])
      .colors(12)

    let circles = document.querySelectorAll('circle')
    const { floor, random } = Math
    const pointLength = random() * length

    function generatePoints(i: number) {
      const originalColor = circles[i].getAttribute('fill')
      const point = circles[i].getPointAtLength(pointLength)

      const tl = gsap.timeline()

      tl.add(
        gsap.set(circles[i], {
          fill: colors[floor(random() * colors.length)],
          cx: point.x + (random() - 0.5) * 300,
          cy: point.y + (random() - 0.5) * 300,
          scale: floor(random() * 7),
        }),
      )
        .to(circles[i], {
          cx: 0,
          cy: 0,
          duration: 7,
          scale: 1,
          ease: POWER2_OUT,
        })
        .to(
          circles[i],
          {
            fill: '#fff',
            duration: 3,
            ease: POWER2_OUT,
          },
          '-=3',
        )
        .to(
          circles[i],
          {
            // originalColor returns string or null, so need to write like that
            //  even though there is no "null" in this case
            fill: originalColor ? originalColor : 'fff',
            duration: 5,
            ease: POWER2_OUT,
          },
          '-=1',
        )
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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;

  svg {
    display: block;
    opacity: 0.7;
    scale: 0.8;
    overflow: visible;

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
