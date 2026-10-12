import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

export default function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        setError(false);
        fetch(`${process.env.PUBLIC_URL || "."}/resumeData.json`, {
            signal: controller.signal,
        })
            .then((response) => {
                if (!response.ok) throw new Error("Unable to load portfolio");
                return response.json();
            })
            .then((result) => {
                if (
                    !result.main ||
                    !result.resume ||
                    !Array.isArray(result.portfolio?.projects)
                )
                    throw new Error("Invalid portfolio");
                setData(result);
            })
            .catch((err) => {
                if (err.name !== "AbortError") setError(true);
            });
        return () => controller.abort();
    }, [attempt]);

    if (!data)
        return (
            <main className="loading-page">
                <a className="wordmark" href="#home">
                    ingþór<span>.</span>
                </a>
                {error ? (
                    <div role="alert">
                        <h1>Let’s try that again.</h1>
                        <p>
                            The portfolio couldn’t load. Please check your
                            connection.
                        </p>
                        <button
                            className="button button-primary"
                            onClick={() => setAttempt((value) => value + 1)}
                        >
                            Retry
                        </button>
                    </div>
                ) : (
                    <p role="status">Loading the portfolio…</p>
                )}
            </main>
        );

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <Header data={data.main} />
            <main id="main" tabIndex="-1">
                <Portfolio data={data.portfolio} />
                <About data={data.main} />
                <Resume data={data.resume} />
            </main>
            <Footer data={data.main} />
        </>
    );
}
