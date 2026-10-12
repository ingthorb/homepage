import React from "react";
import Icon from "./Icon";

export default function Resume({ data }) {
    return (
        <section
            className="section experience-section"
            id="resume"
            aria-labelledby="experience-heading"
        >
            <div className="container">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">03 / THE JOURNEY SO FAR</p>
                        <h2 id="experience-heading">
                            Built on <span className="serif">experience.</span>
                        </h2>
                    </div>
                    <p>
                        Teams in Iceland and Switzerland.
                        <br />
                        Products used by real people.
                        <br />
                        Something learned at every step.
                    </p>
                </div>
                <div className="experience-grid">
                    <div className="experience-list">
                        {data.work.map((work, index) => (
                            <details
                                className="experience-item"
                                key={`${work.company}-${work.title}`}
                                open={index === 0 ? true : undefined}
                            >
                                <summary>
                                    <span className="work-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="work-title">
                                        <h3>{work.company}</h3>
                                        <span>{work.title}</span>
                                        <span className="work-date">
                                            {work.years}
                                        </span>
                                    </span>
                                    <Icon name="plus" />
                                </summary>
                                <p>{work.description}</p>
                            </details>
                        ))}
                    </div>
                    <aside className="education">
                        <span className="mini-label">FOUNDATIONS</span>
                        {data.education.map((item) => (
                            <div className="education-item" key={item.school}>
                                <h3>{item.degree}</h3>
                                <p>{item.school}</p>
                                <span>{item.graduated}</span>
                            </div>
                        ))}
                        <a
                            className="text-link"
                            href="https://www.linkedin.com/in/ingthorb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Full career profile <Icon name="external" />
                        </a>
                    </aside>
                </div>
                <div className="skills">
                    <div>
                        <Icon name="code" />
                        <h3>My toolkit</h3>
                        <p>The right tools for the problem.</p>
                    </div>
                    <ul aria-label="Technical skills">
                        {data.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
