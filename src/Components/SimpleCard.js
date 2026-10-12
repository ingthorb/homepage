import React from "react";
import "./Portfolio.css";

export default function SimpleCard({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.title}>
          <p className="project-kind">{project.kind}</p>
          <h2>{project.title}</h2>
          <p className="project-description">{project.category}</p>
          {project.highlights && (
            <ul className="project-highlights">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          )}
          {project.technologies && (
            <ul className="project-technologies" aria-label={`${project.title} technologies`}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          )}
          <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
            Explore {project.title} <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  );
}
