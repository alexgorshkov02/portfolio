import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";
import DimmerCard from "../../elements/DimmerCard";
import projects from  "../../../data/data.json"

const styles = {
  header: {
    textAlign: 'center'
  },
  cardCont: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
}

export default class Portfolio extends Component {
  state = {};

  render() {
    return (
      <Segment>
        <Header style={styles.header} as="h1">Portfolio</Header>
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
