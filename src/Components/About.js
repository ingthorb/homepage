import React from "react";
import Icon from "./Icon";

export default function About({ data }) {
    return (
        <section
            className="section about-section"
            id="about"
            aria-labelledby="about-heading"
        >
            <div className="container about-grid">
                <div>
                    <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
                    <h2 id="about-heading">
                        Reykjavík,
                        <br />
                        then Switzerland,
                        <br />
                        <span className="serif">then home.</span>
                    </h2>
                    <a
                        className="text-link"
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        More on LinkedIn <Icon name="external" />
                    </a>
                </div>
                <div className="about-copy">
                    <p className="lead">
                        I’m a software engineer in Reykjavík. I got into this
                        because I like making things, and I still do that when
                        I’m not at work.
                    </p>
                    <p>{data.bio}</p>
                    <div className="about-notes">
                        <div>
                            <span className="mini-label">HOW I WORK</span>
                            <p>
                                I stay with a feature from the UI to the backend
                                and the deploy pipeline.
                            </p>
                        </div>
                        <div>
                            <span className="mini-label">
                                AWAY FROM THE SCREEN
                            </span>
                            <p>Football, time outside, and padel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
