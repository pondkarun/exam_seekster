/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const PrivateRoute = ({ children }) => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(null)
  useEffect(() => {
    if (window.sessionStorage.getItem('isLogin'))
      setIsLogin(window.sessionStorage.getItem('isLogin'))
    if (window.sessionStorage.getItem('isLogin') == 1) {
      if (JSON.parse(window.sessionStorage.getItem('token'))) {
        if (JSON.parse(window.sessionStorage.getItem('token')).expires_in < Date.now() / 1000) {
          // console.log("หมดเวลาtoken")
          alert("Token หมดอายุกรุณาเข้าสู่ระบบใหม่อีกครั้ง", "หมดเวลาการเข้าสู่ระบบกรุณาทำการเข้าสู่ระบบใหม่อีกครั้ง!")
          handleLogout();
        }
      } else {
        router.push("/")
      }
    } else {
      router.push("/")
    }
  }, [])

  const handleLogout = () => {
    this.destroy();
    window.sessionStorage.clear();
    window.location.reload();
  }
  // 
  return (
    isLogin === "1" ? (<div>{children}</div>) : ""
  )
}

export default PrivateRoute
