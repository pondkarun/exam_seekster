import Head from 'next/head'
import SignIn from '../routes/SignIn'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>เข้าสู่ระบบ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </div>
  )
}
