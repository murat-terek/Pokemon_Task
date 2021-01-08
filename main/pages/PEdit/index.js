import React from 'react'
import { observer, emit } from 'startupjs'
import { useParams } from '@startupjs/app'
import { ScrollView } from 'react-native'
import { Link, Div, TextInput, H1, Br, Multiselect } from '@startupjs/ui'
import './index.styl'

// name: 'Пикачу',
//     src: 'https://pokemongolife.ru/p/Pikachu.png',
//     type: ['Электрический'],
//     abilities: ['jump', 'sleep'],
//     description:

console.log('Multiselect', Multiselect)

const OPTIONS = [
  { label: 'New York', value: 'ny' },
  { label: 'Los Angeles', value: 'la' },
  { label: 'Tokyo', value: 'tk' },
  { label: 'Moscow', value: 'msc' },
  { label: 'Berlin', value: 'bl' },
  { label: 'Milan', value: 'mi' },
  { label: 'Sydney', value: 'sy' },
  { label: 'Porto', value: 'po' }
]

export default observer(function PEdit () {
  const params = useParams()

  console.log('params', params)

  const title = (params.id === undefined ? 'Add' : 'Edit') + ' pokemon'

  return pug`
    Div
      Link( to='/' ) Back
      Div.form
        H1 #{title}
        TextInput( label='Name' )
        Br
        TextInput( label='Url' )
        Br
        Multiselect( label='Abilities' options=OPTIONS )
        Br
        TextInput( label='Url' multiline numberOfLines=4 )
  `
})
