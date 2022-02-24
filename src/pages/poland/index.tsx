import { NextPage } from 'next'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'

export const Index: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!scrollRef.current) return
    const oddColumns = [
      ...scrollRef.current.querySelectorAll('.column'),
    ].filter((_, index) => index != 1)

    import('locomotive-scroll').then((LocomotiveScroll) => {
      const lscroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.13,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      })
      // Locomotive scroll event: translate the first and third grid column -1*scrollValue px.
      lscroll.on('scroll', (obj: any) => {
        // const lastscroll = obj.scroll.y
        oddColumns &&
          oddColumns.forEach((column) => {
            column.style.transform = `translateY(${obj.scroll.y}px)`
          })
      })
    })
  }, [])

  return (
    <Columns data-scroll-container ref={scrollRef}>
      <ColumnWrap className="odd">
        <Column className="column">
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/100/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/101/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/103/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/104/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/201/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/106/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/107/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/108/200/200" />
            </Pic>
          </ColumnItem>
        </Column>
      </ColumnWrap>
      <ColumnWrap>
        <Column data-scroll-section className="column">
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/109/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/110/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/111/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/112/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/113/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/114/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/115/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/116/200/200" />
            </Pic>
          </ColumnItem>
        </Column>
      </ColumnWrap>
      <ColumnWrap className="odd">
        <Column className="column">
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/117/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/118/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/119/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/120/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/121/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/122/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/123/200/200" />
            </Pic>
          </ColumnItem>
          <ColumnItem>
            <Pic>
              <img src="https://picsum.photos/id/124/200/200" />
            </Pic>
          </ColumnItem>
        </Column>
      </ColumnWrap>
    </Columns>
  )
}

const Columns = styled.div`
  display: flex;
  justify-content: center;
`
const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  &.odd {
    height: 100vh;
    flex-direction: column-reverse;
  }
`
const Column = styled.div`
  margin: 20px;
  will-change: transform;
  width: 25vw; //todo: change later
`
const ColumnItem = styled.div`
  margin: 0;
  position: relative;
`
const Pic = styled.div`
  margin: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`

export default Index
