import React, { Component } from "react";
import { Image, Dimmer, Header, Segment, Icon } from "semantic-ui-react";

export default class Portfolio extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content1 = (
      <div>
        <h2>
          <a href="https://alexgorshkov02.github.io/SteamAPIproject">
            DealSella
          </a>
          <a href="https://github.com/alexgorshkov02/SteamAPIproject">
            <Icon link inverted name="github" size="big" />
          </a>
        </h2>
        <Header as="h4" inverted>
          HTML/CSS/JavaScript
        </Header>
      </div>
    );

    const content2 = (
      <div>
        <h2>
          <a href="https://alexgorshkov02.github.io/SteamAPIproject">
            DealSella
          </a>
          <a href="https://github.com/alexgorshkov02/SteamAPIproject">
            <Icon link inverted name="github" size="big" />
          </a>
        </h2>
        <Header as="h4" inverted>
          HTML/CSS/JavaScript
        </Header>
      </div>
    );

    return (
      <Segment>
        <Header as="h1">Portfolio</Header>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content1 }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          size="medium"
          src="./assets/images/projectPreviews/dealSella.jpg"
        />
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content2 }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          size="medium"
          src="./assets/images/projectPreviews/olympicNews.jpg"
        />
      </Segment>
    );
  }
}

// const Portfolio = () => (
//   <>
//   <Card>
//     <Image
//       src="./assets/images/projectPreviews/dealSella.jpg"
//       wrapped
//       ui={false}
//     />
//   </Card>

// <Card>
// <Image
//   src={'./assets/images/projectPreviews/olympicNews.jpg'}
//   wrapped
//   ui={false}
// />
// <Card.Content>
//   <Card.Header>Matthew</Card.Header>
//   <Card.Meta>
//     <span className="date">Joined in 2015</span>
//   </Card.Meta>
//   <Card.Description>
//     Matthew is a musician living in Nashville.
//   </Card.Description>
// </Card.Content>
// <Card.Content extra>
//   <a>
//     <Icon name="user" />
//     22 Friends
//   </a>
// </Card.Content>
// </Card>
// </>
// );

// export default Portfolio;
