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
      I am a software engineer. Currently I work as a data security engineer. I was offered to this position a couple years ago and decided to try. However I realized I still have a passion for software development. I decided to refresh and sharpen my development skills. That is why I graduted from UCF javascript full stack web development cources. 
      <br/><br/>
      I have some experience in Java EE. I worked with that in the past. I continue learning web technoliopgies and I grew a passion for learning that I’ve made it into a daily habit. With technology growing at a faster pace than the speed of light, there is still an abundance of technologies I am willing to learn in the future and especially in the work field. I suppose it is better to use the better technology than to learn just one for everything. Even it is requered to spend time on learning it. 
      <br/><br/>
      Programming is amazing because you can create anything imagined. Sometimes it is challenging, somethimes it causes a headache but it worth every ounce of effort. It is more satisfying when a way how to solve a difficult issue is found.
      <br/><br/>
      In my off days, I enjoy traveling, video games, movies, working out cycling and skating. I am fluent in Russian and proficient in English. Feel free to communicate with me whichever language you feel comfortable.
    </Container>
  </Segment>
);

export default About;