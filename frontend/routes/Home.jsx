import jwt_decode from "jwt-decode";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const Home = () => {
    const [user, setuser] = useState({})
    const router = useRouter()
    useEffect(() => {
        const getToken = JSON.parse(window.sessionStorage.getItem('token'))
        setuser(jwt_decode(getToken.items.access_token))
        console.log('user :>> ', user);
    }, [])

    const logout = () => {
        console.log("sdsd");
        window.sessionStorage.clear();
        router.push("/")
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="d-flex">
                        <button className="btn btn-outline-danger" type="button" onClick={() => {logout()}}>ออกจากระบบ</button>
                    </div>

                </div>
            </nav>
            <h1 className="container p-5" style={{ textAlign: "center" }}>ยินดีต้นรับ คุณ {user.f_name} {user.l_name}</h1>
        </div>
    );
};

export default Home;
