import React, { Component } from "react";
import Zmage from "react-zmage";
import SimpleCard from "./SimpleCard";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Here are some projects I have worked on</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <SimpleCard projects={projects}></SimpleCard>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
