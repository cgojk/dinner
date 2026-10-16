
import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import ThirdSection from "../components/ThirdSection";




export default function Home(){
    return (
        <div className="home__page">
            <Hero />
            <Info/>
            <ThirdSection />
        </div>
    )
}