import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/profile_pic.JPG";
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const country = this.props.data.address.country;
    const email = this.props.data.email;
    const linkedin = this.props.data.linkedin;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt={name} />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}, {country}
                  </span>
                  <br />
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={linkedin} className="button">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>View LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
