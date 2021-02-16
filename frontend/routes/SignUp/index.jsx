import { useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import Axios from "axios";


const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [f_name, setFname] = useState(null);
  const [l_name, setLname] = useState(null);
  const router = useRouter()
  const Register = async () => {
    Axios({
      method: "post",
      url: `http://localhost:9000/provider/register`,
      config: { headers: { "Content-Type": "multipart/form-data" } },
      data: {
        email,
        password,
        f_name,
        l_name,
      },
    }).then((res) => {
      console.log("res :>> ", res.data);
      alert("บันทึกสำเร็จ");
      router.push("/");
    });
  };

  return (
    <div className="pt-5">
      <form
        className="row g-3"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          Register();
        }}
      >
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputFname" className="form-label">
            ชื่อจริง
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFname"
            required
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLname" className="form-label">
            นามสกุล
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLname"
            required
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            บันทึก
          </button>
          <Link href="/">
            <button type="button" className="btn btn-secondary">
              ยกเลิก
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
