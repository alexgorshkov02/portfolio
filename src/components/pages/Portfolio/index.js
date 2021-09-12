import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import DimmerCard from "../../elements/DimmerCard";
import projects from  "../../../data/data.json"

const styles = {
  cardCont: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px'
  }
}

export default class Portfolio extends Component {
  state = {};

  render() {
    return (
      <Segment>
        <Header as="h1">Portfolio</Header>
        <Container style={styles.cardCont}>
          {" "}
          {projects.map((project, index) => (
            <DimmerCard key= {index} {...project}/>
          ))}
        </Container>
      </Segment>
    );
  }
}
