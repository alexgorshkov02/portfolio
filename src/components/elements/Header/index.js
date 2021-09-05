import React from 'react'
import { Header as HeaderReact, Image } from 'semantic-ui-react'

const Header = () => (
  <HeaderReact as='h2'>
    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Alexander Gorshkov
  </HeaderReact>
)

export default Header