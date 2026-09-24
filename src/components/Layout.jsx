import React from "react"
// import { Outlet, useLocation } from "react-router-dom"

//  import Footer from "./Footer"


export default function Layout() {
//   const location = useLocation();

//   const footerVariant =
//     location.pathname === "/location" ? "location" : "home";

    return (
       
    <div className="layout">
   
      <main className="main-content">
        <Outlet />
      </main>
{/* 
       <Footer variant={footerVariant}/>  */}
    </div>

    )
}