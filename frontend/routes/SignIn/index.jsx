import { useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import Axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter()
  const Login = async () => {
    Axios({
      method: "post",
      url: `http://localhost:9000/provider/login`,
      config: { headers: { "Content-Type": "multipart/form-data" } },
      data: {
        email,
        password,
      },
    }).then((res) => {
      console.log("res :>> ", res.data);
      alert("เข้าสู่ระบบสำเร็จ");
      window.sessionStorage.setItem("token", JSON.stringify(res.data));
      window.sessionStorage.setItem("isLogin", 1);
      router.push("home")
    });
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      Login()
    }}>
      <div className="pt-5">
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          เข้าสู่ระบบ
        </button>
        <Link href="/signup">
          <button type="button" className="btn btn-info">
            สมัครสมาชิก
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
