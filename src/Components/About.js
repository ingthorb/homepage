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
                        An engineer.
                        <br />A builder.
                        <br />
                        <span className="serif">A curious person.</span>
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
                        Good software starts with understanding the people who
                        use it.
                    </p>
                    <p>{data.bio}</p>
                    <div className="about-notes">
                        <div>
                            <span className="mini-label">HOW I WORK</span>
                            <p>
                                From frontend details to backend reliability and
                                the pipelines in between.
                            </p>
                        </div>
                        <div>
                            <span className="mini-label">
                                AWAY FROM THE SCREEN
                            </span>
                            <p>
                                Football, outdoor adventures, and finding the
                                next thing to learn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
