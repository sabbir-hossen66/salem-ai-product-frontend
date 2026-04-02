"use client";
import Navbar from "../layout/Navbar";
import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import PortfolioAndStrategy from "./components/PortfolioAndStrategy";
import ValueAndStrengths from "./components/ValueAndStrengths";
import WhoAre from "./components/WhoAre";

export default function LandingPage() { 
    return (
        <div>
           {/* <Navbar /> */}
           <Hero />
           <WhoAre />
           <ValueAndStrengths/>
           <PortfolioAndStrategy />
           <CallToAction />
        </div>
    );
}