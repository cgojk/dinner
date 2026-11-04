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
    <p className="footer-text--copyright">Coded by Catalina G.</p>
</>
    )
}