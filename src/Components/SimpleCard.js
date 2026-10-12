import React from "react";
import Icon from "./Icon";
import ProjectArt from "./ProjectArt";

export default function SimpleCard({ projects }) {
    return (
        <div className="project-grid">
            {projects.map((project) => (
                <article className="project-card" key={project.title}>
                    <ProjectArt art={project.art} />
                    <div className="project-body">
                        <p className="project-kind">{project.kind}</p>
                        <h3>{project.title}</h3>
                        <p className="project-description">
                            {project.category}
                        </p>
                        {project.highlights && (
                            <details className="project-details">
                                <summary>
                                    What’s inside <Icon name="plus" />
                                </summary>
                                <ul>
                                    {project.highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </details>
                        )}
                        {project.technologies && (
                            <ul
                                className="project-technologies"
                                aria-label={`${project.title} technologies`}
                            >
                                {project.technologies.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                        <a
                            className="project-link"
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore {project.title}
                            <Icon name="external" />
                        </a>
                    </div>
                </article>
            ))}
        </div>
    );
}
