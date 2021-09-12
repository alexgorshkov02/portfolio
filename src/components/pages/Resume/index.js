import { Component } from "react";
import { Header, Segment, List } from "semantic-ui-react";
import "./index.css";
export default class Resume extends Component {
  render() {
    return (
      <Segment>
        <Header as="h1">Resume</Header>
        <Header as="h4">
          Download my{" "}
          <a href="https://docs.google.com/document/d/11loHJpxjWph0vb23u_CBJaKrcTEHKXxutPsfWrXCBlg/edit">resume</a>
        </Header>

        <Header as="h3">Front-end Proficiences</Header>
        <List bulleted>
          <List.Item className="list-item">HTML</List.Item>
          <List.Item className="list-item">CSS</List.Item>
          <List.Item className="list-item">JavaScript</List.Item>
          <List.Item className="list-item">jQuery</List.Item>
          <List.Item className="list-item">responsive design</List.Item>
          <List.Item className="list-item">React</List.Item>
          <List.Item className="list-item">Semantic UI</List.Item>
        </List>

        <Header as="h3">Back-end Proficiences</Header>
        <List bulleted>
          <List.Item className="list-item">APIs</List.Item>
          <List.Item className="list-item">Node</List.Item>
          <List.Item className="list-item">Express</List.Item>
          <List.Item className="list-item">MySQL, Sequelize</List.Item>
          <List.Item className="list-item">Mongo DB, Mongoose</List.Item>
        </List>
      </Segment>
    );
  }
}
