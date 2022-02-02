import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      Hello next.js
      <Link href="/journey">journey</Link>
    </>
  )
}

export default Home
