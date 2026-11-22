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
                    <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
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
                        because I like building things — and I still do that
                        nights and weekends.
                    </p>
                    <p>{data.bio}</p>
                    <div className="about-notes">
                        <div>
                            <span className="mini-label">HOW I WORK</span>
                            <p>
                                I like owning a feature end to end — UI,
                                backend, and getting it out the door.
                            </p>
                        </div>
                        <div>
                            <span className="mini-label">
                                AWAY FROM THE SCREEN
                            </span>
                            <p>Football, padel, and getting outside.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
