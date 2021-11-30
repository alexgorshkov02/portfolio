import React from "react";
import { Segment, Image, Container } from "semantic-ui-react";
import "./index.css";

const photo = "./assets/images/photo.jpg";

console.log(photo);

const About = () => (
  <Segment className="about-segment">
    <Image src={photo} size="medium" />
    <Container className="text-container" fluid>
      Hi there! 
      <br/><br/>
      My name is Alex Gorshkov. 
      <br/><br/>
      I am a full stack web developer and this is my portfolio website with some examples of my work.
    </Container>
  </Segment>
);

export default About;