import React, { useState } from 'react'
import { Br, Card, H4, Span, Row, Button, Collapse } from '@startupjs/ui'
import { Image } from 'react-native'
import './index.styl'

const { Content } = Collapse

const Pokemon = ({
  name,
  src,
  index,
  type,
  abilities,
  description,
  onEdit,
  onDelete,
}) => {
  const [collapsed, setCollapsed] = useState(false)

  console.log('collapsed', collapsed)

  const handleClickEdit = () => {
    onEdit && onEdit(index)
  }

  const handleClickDelete = () => {
    onDelete && onDelete(index)
  }

  return pug`
    Card.card
      Image.img( source={uri: src} )
      Br
      H4 #{name}
      Br
      Span( size='xl' ) #{abilities}
      Br
      Collapse( 
        open=collapsed
        onChange=() => setCollapsed(!collapsed)
      )
        Content #{description}
      Br
      Row( align='right' )
        Button( onPress=handleClickDelete ) Delete
        Button.edit(
          onPress=handleClickEdit
          color='primary'
          variant='flat'
        ) Edit
  `
}

export default Pokemon
