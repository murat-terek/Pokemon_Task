import React from 'react'
import { observer, emit } from 'startupjs'
import { useParams } from '@startupjs/app'
import { Text, ScrollView } from 'react-native'
import './index.styl'
import { Content } from '@startupjs/ui'

export default observer(function PAbout () {
  const params = useParams()

  console.log('params', params)

  return pug`
    ScrollView.root
      Content
        Text.text( onPress=() => emit('url', '/') ) Built on #{params.id}
  `
})
