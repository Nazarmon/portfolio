import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nazar Monastyrskiy </span>
            from <span className="purple"> Lviv, Ukraine.</span>
            <br />
            I had ever employed as a software developer at Buffer remotely.
            <br />
            I define the Brand Strategy by Creating the Corporate Profile, 
            Brand Identities such as Logos, Stationary, Flyers , Brochures, 
            Infographic Design and Power Point Presentations.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay Hungry. Stay Foolish"{" "}
          </p>
          <footer className="blockquote-footer">Nazar Monastyrskiy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
