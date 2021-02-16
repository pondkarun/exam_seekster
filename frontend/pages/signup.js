import Head from 'next/head'
import SignUp from '../routes/SignUp';
const signup = () => {
    return (
        <div className="container">
            <Head>
                <title>สมัครสมาชิก</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SignUp />
        </div>
    )
}

export default signup
