import React from 'react'
import { Header as HeaderWithImage, Image } from 'semantic-ui-react'

const Header = () => (
  <HeaderWithImage as='h2'>
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Alexander Gorshkov
  </HeaderWithImage>
)

export default Header