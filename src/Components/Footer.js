import React from "react";
import Icon from "./Icon";

export default function Footer({ data }) {
    return (
        <footer id="contact">
            <div className="container">
                <div className="contact-main">
                    <div>
                        <p className="eyebrow">04 / SAY HELLO</p>
                        <h2>
                            Have something
                            <br />
                            <span className="serif">in mind?</span>
                        </h2>
                        <p>
                            A project, a question, or just a good conversation.
                            <br />
                            I’d love to hear from you.
                        </p>
                    </div>
                    <a className="contact-email" href={`mailto:${data.email}`}>
                        <span>LET’S START A CONVERSATION</span>
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
