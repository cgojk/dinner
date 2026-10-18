import React from "react"
 import { Outlet } from "react-router-dom"

import Footer from "../components/Footer";


export default function Layout() {
//   const location = useLocation();

//   const footerVariant =
//     location.pathname === "/location" ? "location" : "home";

    return (
       
    <div className="layout">
   
      <main className="main-content">
        <Outlet />
      </main>
      <Footer/>

    </div>

    )
}