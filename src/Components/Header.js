import React, { useRef, useState } from "react";
import Icon from "./Icon";

export default function Header({ data }) {
    const [open, setOpen] = useState(false);
    const toggle = useRef(null);
    const close = () => setOpen(false);
    return (
        <header id="home">
            <div
                className="nav-shell"
                onKeyDown={(event) => {
                    if (event.key === "Escape" && open) {
                        close();
                        toggle.current?.focus();
                    }
                }}
            >
                <div className="container nav-inner">
                    <a
                        className="wordmark"
                        href="#home"
                        aria-label="Ingþór — home"
                        onClick={close}
                    >
                        ingþór<span>.</span>
                    </a>
                    <button
                        className="menu-toggle"
                        ref={toggle}
                        aria-expanded={open}
                        aria-controls="main-navigation"
                        aria-label={
                            open ? "Close navigation" : "Open navigation"
                        }
                        onClick={() => setOpen(!open)}
                    >
                        <Icon name={open ? "close" : "menu"} />
                    </button>
                    <nav
                        id="main-navigation"
                        className={open ? "navigation is-open" : "navigation"}
                        aria-label="Main navigation"
                    >
                        <a href="#portfolio" onClick={close}>
                            Projects
                        </a>
                        <a href="#about" onClick={close}>
                            About
                        </a>
                        <a href="#resume" onClick={close}>
                            Experience
                        </a>
                        <a
                            className="nav-contact"
                            href="#contact"
                            onClick={close}
                        >
                            Contact <Icon name="external" />
                        </a>
                    </nav>
                </div>
            </div>
            <div className="container hero">
                <div className="hero-copy">
                    <p className="eyebrow hero-role">
                        <span className="status-dot" aria-hidden="true" />
                        Senior Software Engineer at NOVA Iceland
                    </p>
                    <h1>
                        Ingþór Birkir
                        <br />
                        <span className="serif">Árnason.</span>
                    </h1>
                    <p className="hero-intro">
                        I work on telecom products at NOVA, like eSIM signup
                        and travel connectivity. I also build my own apps.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#portfolio">
                            Explore my projects <Icon name="down" />
                        </a>
                        <a
                            className="text-link"
                            href={data.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub <Icon name="external" />
                        </a>
                    </div>
                    <div className="hero-current">
                        <span className="mini-label">CURRENTLY</span>
                        <span>
                            Senior Software Engineer at{" "}
                            <strong>NOVA Iceland</strong>
                        </span>
                    </div>
                </div>
                <figure className="hero-portrait">
                    <div className="portrait-frame">
                        <img
                            src={`images/${data.image}`}
                            alt={data.name}
                            width="1000"
                            height="1000"
                        />
                    </div>
                    <figcaption>
                        <span>
                            <Icon name="pin" /> Reykjavík, Iceland
                        </span>
                        <span>Back in Iceland.</span>
                    </figcaption>
                </figure>
            </div>
            <div className="container hero-bottom">
                <p>Telecom at NOVA. My own projects after that.</p>
                <a href="#portfolio">
                    A few things I’ve built <Icon name="down" />
                </a>
            </div>
        </header>
    );
}
