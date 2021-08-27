import React, { Component } from "react";
import "./Header.css";
import Rain from "./Rain/Rain";
import Snow from "./Snow/Snow";
import Sun from "./Sun/Sun";
import axiosConfig from "../utils/Axios/axiosConfig";
import moment from "moment";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRaining: false,
            isSunny: false,
            isSnowing: false,
        };
    }

    componentDidMount() {
        axiosConfig
            .get()
            .then((res) => {
                let weatherCode = res.data.current.condition.code;
                if (weatherCode === 1000 || weatherCode === 1003) {
                    this.setState({ isSunny: true });
                } else if (
                    weatherCode === 1150 ||
                    weatherCode === 1153 ||
                    weatherCode === 1183 ||
                    weatherCode === 1186 ||
                    weatherCode === 1189 ||
                    weatherCode === 1195 ||
                    weatherCode === 1243 ||
                    weatherCode === 1246
                ) {
                    this.setState({ isRaining: true });
                } else if (
                    weatherCode === 1213 ||
                    weatherCode === 1216 ||
                    weatherCode === 1225 ||
                    weatherCode === 1237 ||
                    weatherCode === 1258 ||
                    moment(new Date().getMonth).isSameOrAfter('December')
                ) {
                    this.setState({ isSnowing: true });
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        if (!this.props.data) return null;

        const linkedin = this.props.data.linkedin;
        const github = this.props.data.github;
        const name = this.props.data.name;
        const description = this.props.data.description;

        return (
            <header id="home">
                <img
                    alt="Bern in July, taken by me"
                    className={`header-image ${
                        this.state.isRaining ? "header-image-darker" : ""
                    }  ${this.state.isSnowing ? "header-image-darker" : ""} ${
                        this.state.isSunny ? "header-image-brighter" : ""
                    }`}
                    src="images/header_pic.jpg"
                />
                <Sun sun={this.state.isSunny} />
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
                <Snow snowing={this.state.isSnowing} />
                <Rain raining={this.state.isRaining} />

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}
