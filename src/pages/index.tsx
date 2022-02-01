import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      Hello next.js
      <Link href="/journey">journey</Link>
    </div>
  )
}

export default Home
