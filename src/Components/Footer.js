import React from "react";
import Icon from "./Icon";

export default function Footer({ data }) {
    return (
        <footer id="contact">
            <div className="container">
                <div className="contact-main">
                    <div>
                        <p className="eyebrow">04 / CONTACT</p>
                        <h2>
                            Send me
                            <br />
                            <span className="serif">an email.</span>
                        </h2>
                        <p>
                            For work, a project,
                            <br />
                            or just to say hello.
                        </p>
                    </div>
                    <a className="contact-email" href={`mailto:${data.email}`}>
                        <span>EMAIL</span>
                        {data.email}
                        <Icon name="external" />
                    </a>
                </div>
                <div className="footer-bottom">
                    <a
                        className="wordmark"
                        href="#home"
                        aria-label="Ingþór — back to top"
                    >
                        ingþór<span>.</span>
                    </a>
                    <p>
                        © {new Date().getFullYear()} {data.name}
                    </p>
                    <div>
                        <a
                            href={data.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub <Icon name="external" />
                        </a>
                        <a
                            href={data.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn <Icon name="external" />
                        </a>
                        <a href="#home">
                            Back to top <span aria-hidden="true">↑</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
