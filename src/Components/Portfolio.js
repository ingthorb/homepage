import React, { Component } from "react";
import SimpleCard from "./SimpleCard";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects & products</h1>
            <p className="portfolio-intro">{this.props.data.intro}</p>
            <div id="portfolio-wrapper">
              <SimpleCard projects={projects}></SimpleCard>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
