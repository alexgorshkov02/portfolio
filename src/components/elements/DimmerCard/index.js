import React, { Component } from "react";
import { Image, Dimmer, Header, Icon } from "semantic-ui-react";
 
export default class DimmerCard extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <h2>
          <a href={this.props.linkToApp}>
          {this.props.title}
          </a>
          <a href={this.props.linkToGitHub}>
            <Icon link inverted name="github"/>
          </a>
        </h2>
        <Header as="h4" inverted>
        {this.props.technologies}
        </Header>
        <Header as="h5" inverted>
        {this.props.about}
        </Header>
      </div>
    );


    return (
        <>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          size="medium"
          src={this.props.previewPath}
        />
        </>
    );
  }
}