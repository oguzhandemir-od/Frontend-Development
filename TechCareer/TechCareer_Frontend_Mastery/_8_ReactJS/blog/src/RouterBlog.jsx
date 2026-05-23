import React from 'react'
import HeaderFunction from './components/HeaderFunction'
import FooterFunction from './components/FooterFunction'
import MainFunction from './components/MainFunction'

// Router
import { Navigate, Route, Routes } from 'react-router-dom'

// Redux Login
import LoginForm from './components/login/LoginForm'
import RegisterForm from './components/register/RegisterForm'

export default function RouterBlog() {
  return (
    <React.Fragment>
        <HeaderFunction name="Oğuzhan Demir"/>

        <div className="container">
          <Routes>
            <Route path={"/"} element={<MainFunction/>}/>
            <Route path={"/index"} element={<MainFunction/>}/>
            <Route path={"/login"} element={<LoginForm/>}/>
            <Route path={"/register"} element={<RegisterForm/>}/>
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
          </Routes>
        </div>
        {/* <MainFunction/> */}
        <FooterFunction/>
    </React.Fragment>
  )
}