import React, { Component } from "react";
import "./Header.css";
import classNames from "classnames";
import Rain from "./Rain/Rain";
import Snow from "./Snow/Snow";
import Sun from "./Sun/Sun";
import axiosConfig from "../utils/Axios/axiosConfig";

class Header extends Component {
    render() {
        if (!this.props.data) return null;
        let itsRaining = true;
        let itsSnowing = false;
        let itsSun = false;
        var liClasses = classNames({
            "header-image": true,
            "header-image-darker": itsRaining || itsSnowing,
            "header-image-brighter": itsSun,
        });

        const linkedin = this.props.data.linkedin;
        const github = this.props.data.github;
        const name = this.props.data.name;
        const description = this.props.data.description;

        return (
            <header id="home">
                <img
                    alt="Bern in July, taken by me"
                    className={liClasses}
                    src="images/header_pic.jpg"
                />

                <nav id="nav-wrap">
                    <a
                        className="mobile-btn"
                        href="#nav-wrap"
                        title="Show navigation"
                    >
                        Show navigation
                    </a>
                    <a
                        className="mobile-btn"
                        href="#home"
                        title="Hide navigation"
                    >
                        Hide navigation
                    </a>
                    <Snow snowing={itsSnowing} />
                    <Rain raining={itsRaining} />
                    <Sun sun={itsSun} />
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#resume">
                                Resume
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Works
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{name}</h1>
                        <h3 className="descriptionHeader">{description}</h3>
                        <hr />
                        <ul className="social">
                            <a
                                href={linkedin}
                                className="button btn linkedin-btn"
                            >
                                <i className="fa fa-linkedin"></i>Linkedin
                            </a>
                            <a href={github} className="button btn github-btn">
                                <i className="fa fa-github"></i>Github
                            </a>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
