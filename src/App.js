import React from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import resumeData from "./resumeData.json";

export default function App() {
    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Header data={resumeData.main} />
            <main id="main" tabIndex="-1">
                <Portfolio data={resumeData.portfolio} />
                <Resume data={resumeData.resume} />
                <About data={resumeData.main} />
            </main>
            <Footer data={resumeData.main} />
        </>
    );
}
