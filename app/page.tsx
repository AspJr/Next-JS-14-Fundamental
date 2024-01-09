import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>TESTING</h1>
      <br/>
      <Link href='/posts'>PAGE POST</Link>
      <br/>
      <Link href='/albums'>PAGE ALBUM</Link>
    </>
  )
}
 