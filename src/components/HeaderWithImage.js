import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const HeaderWithImage = () => (
  <Header as='h2'>
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Alexander Gorshkov
  </Header>
)

export default HeaderWithImage