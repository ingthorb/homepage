import React, { useState } from "react";
import SimpleCard from "./SimpleCard";

export default function Portfolio({ data }) {
    const [filter, setFilter] = useState("All projects");
    const filters = [
        "All projects",
        "Personal products",
        "Websites",
        "Professional work",
    ];
    const projects = data.projects.filter(
        (project) => filter === "All projects" || project.group === filter,
    );
    return (
        <section
            className="section projects-section"
            id="portfolio"
            aria-labelledby="projects-heading"
        >
            <div className="container">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">01 / SELECTED WORK</p>
                        <h2 id="projects-heading">
                            Ideas,{" "}
                            <span className="serif">out in the world.</span>
                        </h2>
                    </div>
                    <p>
                        Some solve a problem.
                        <br />
                        Some start with “what if?”
                        <br />
                        All of them are built with care.
                    </p>
                </div>
                <div className="project-toolbar">
                    <div
                        className="project-filters"
                        role="group"
                        aria-label="Filter projects"
                    >
                        {filters.map((label) => (
                            <button
                                key={label}
                                aria-pressed={filter === label}
                                onClick={() => setFilter(label)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <p className="project-count" role="status">
                        {projects.length} projects
                    </p>
                </div>
                <SimpleCard projects={projects} />
            </div>
        </section>
    );
}
