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
                        <p className="eyebrow">03 / EXPERIENCE</p>
                        <h2 id="experience-heading">
                            Jobs I’ve <span className="serif">had.</span>
                        </h2>
                    </div>
                    <p>
                        Iceland and Switzerland.
                        <br />
                        From a student job to telecom.
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
                        <h3>Skills</h3>
                        <p>What I use most.</p>
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
