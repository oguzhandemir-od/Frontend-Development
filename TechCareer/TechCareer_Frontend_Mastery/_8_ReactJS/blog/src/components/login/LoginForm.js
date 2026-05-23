import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { Link, useNavigate } from "react-router-dom";

// Login
const LoginForm = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // Users
  const [users,setUsers]=useState([]);
  const[findUser,setFindUser]=useState(null);

  // Redirect
  const navigate = useNavigate();

  // UseEffect
  useEffect(()=>{
    fetch('66ed10e0380821644cdb2edb.mockapi.io/api/v1/blog/react_project')
    .then((response)=>response.json())
    .then((data)=>setUsers(data))
    .catch((err)=>{console.error(err)})
  },[]);

  // Find
  const searchUser=()=>{
    const user=users.find((u)=>u.email.toLowerCase()===email.toLowerCase());
    setFindUser(user);
    return findUser;
  }

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Default: email: oguzhandemir-od@yandex.com
    // Default: password: root

    // if (username === "root" && password === "root") {
    //   dispatch(login({ username }));

    //   navigate("/index");
    // } else {
    //   alert("Geçersiz kullanıcı adı veya şifre girildi.");
    // }

    if (email === findUser.email && password === findUser.password) {
      dispatch(login({ email }));

      navigate("/index");
    } else {
      alert("Geçersiz kullanıcı adı veya şifre girildi.");
    }
  };

  // Return
  return (
    <div className="shadow p-2">
      <h1 className="text-center display-3 text-primary mt-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div class="mb-4">
            <label for="" class="form-label">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              value={email}
              className="form-control"
              placeholder="Kullanıcı Adı"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label for="" class="form-label">
              Kullanıcı Şifresi
            </label>
            <input
              type="password"
              value={password}
              className="form-control"
              placeholder="Kullanıcı Şifresi"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={searchUser}>
          Giriş Yap
        </button>
        <button type="reset" className="btn btn-danger ms-2">
          Temizle
        </button>
        <Link className="btn btn-info text-white ms-2" to="/register">Kayıt Ol</Link>
      </form>
    </div>
  );
}; // End Login

// Export
export default LoginForm;
