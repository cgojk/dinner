import React from "react"
 import { Outlet } from "react-router-dom"

import Footer from "../components/Footer";


export default function Layout() {
   

    return (
       <>
    <div className="layout">
   
      <main className="main-content">
        <Outlet />
      </main>
      <Footer/>

    </div>
    <p>Coded by Catalina Gojkovic</p>
</>
    )
}