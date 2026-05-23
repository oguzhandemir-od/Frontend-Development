import React, { useContext } from "react";
import "../style.css";
import { ThemeContext } from "./context-api/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./login/authSlice";

// Redirect

export default function HeaderFunction(props) {
  // Context Api
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Redux Login (Authenticated)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const styles = {
    light: {
      background: "white",
      color: "black",
      padding: "2rem",
    },
    dark: {
      background: "black",
      color: "white",
      padding: "2rem",
    },
  };

  {
    /* start Header  */
  }
  {
    /* 1.YOL(Styling) */
  }
  {
    /* <header style={{color:'blue'}}></header> */
  }

  {
    /* 2.YOL(Styling) */
  }
  // const headerCss={
  //   "height":"50vh",
  //   "width":"100%",
  //   "background-color":"black",
  //   "color":"white",
  //   "padding-top":"5rem"
  // }

  return (
    <>
      {/* {Start Nav} */}
      <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div class="container">
          <Link to="/index" className="navbar-brand">
            {props.name}
          </Link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page">
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form class="d-flex my-2 my-lg-0">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <button
              onClick={toggleTheme}
              className="btn btn-warning my-2 my-sm-0 ms-2"
            >
              <i class="fa-solid fa-circle-half-stroke"></i>
            </button>

            {isAuthenticated ? (
              <div>
                <span className="text-white ms-2 me-2">
                  Hoşgeldiniz, {user.username}
                </span>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(logout())}
                >
                  Çıkış Yap
                </button>
              </div>
            ) : (
              <Link to="/login" className="ms-2 btn btn-primary">
                <i class="fa-solid fa-user-lock"></i>
              </Link>
            )}


            {isAuthenticated ? (
              <div>
                
              </div>
            ) : (
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown text-white">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Register/Login
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link to="/login" className="me-2 dropdown-item">
                    Login
                  </Link>
                  <Link to="/register" className="me-2 dropdown-item">
                    Register
                  </Link>
                </div>
              </li>
            </ul>
            )}

            
          </div>
        </div>
      </nav>
      {/* end Nav  */}

      {/* start Header  */}
      {/* 1.YOL(Styling) */}
      {/* <header style={{color:'blue'}}></header> */}
      {/* 2.YOL(Styling) */}

      {/*3.YOL*/}
      <header className="backgroundExternal">
        <p className="specialParag">React Eğitimi</p>
      </header>

      {/* <img src={background} alt="" srcset="" /> */}

      {/* end Header  */}
    </>
  );
}
