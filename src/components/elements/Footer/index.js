import React from "react";
import { Header, Segment, Grid, Icon } from "semantic-ui-react";
import "./index.css";

const Footer = () => (
  <Segment id="footer">
    <Header as="h1" textAlign="center">
      <Grid centered relaxed >
        <Grid.Row >
          <Grid.Column>
          <a href="mailto:alexgorshkov0290@gmail.com">
              <Icon link inverted name="mail" size="large" />
            </a>
          </Grid.Column>
          <Grid.Column>
            <a href="https://github.com/alexgorshkov02">
              <Icon link inverted name="github" size="large" />
            </a>
          </Grid.Column>
          <Grid.Column>
            <a href="https://www.linkedin.com/in/alexander-gorshkov-212915119/">
              <Icon link inverted name="linkedin square" size="large" />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Header>
  </Segment>
);

export default Footer;
