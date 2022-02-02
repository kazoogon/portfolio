/**
 * -1〜+1の範囲で要素上のマウス座標を取得
 * TouchEvent はスマホ用
 * @param {MouseEvent | TouchEvent} event
 * @returns {{x: number; y: number}}
 */

export const getInitializedMousePosByMouseEvent = (
  e: MouseEvent | TouchEvent,
): { x: number; y: number } => {
  const element: EventTarget = e.currentTarget
  let event = e
  let x: number
  let y: number

  if (e.nativeEvent) {
    event = e.nativeEvent
  }

  // 要素上のXY座標
  if (event instanceof TouchEvent) {
    x = event.touches[0].clientX - element.offsetLeft
    y = event.touches[0].clientY - element.offsetTop
  } else if (event instanceof MouseEvent) {
    x = event.clientX - element.offsetLeft
    y = event.clientY - element.offsetTop
  }

  // canvas要素の幅・高さ
  const w = element.offsetWidth
  const h = element.offsetHeight

  // -1〜+1の範囲で現在のマウス座標を登録する
  const initializedX = (x / w) * 2 - 1
  const initializedY = -(y / h) * 2 + 1

  return { x: initializedX, y: initializedY }
}

/**
 * remove element itself
 * 引数のelement自体を削除
 * @param {Element} el
 */
export const removeElementItself = (el: Element): void => {
  el.parentNode.removeChild(el)
}

/**
 * svgのpath1つ1つのrefを取得
 * @param {HTMLElement} ref
 * @returns {[]}
 */
export const getSvgPaths = (ref: HTMLElement): number[] => {
  const paths = Array.from(ref.current.querySelectorAll('path'))
  return paths
}

/**
 * get random number
 * @param min
 * @param max
 * @returns {number}
 */
export const getRandomInt = (min, max): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
