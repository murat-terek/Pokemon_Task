import React, { useState, useEffect } from 'react'
import { observer, emit, useDoc } from 'startupjs'
import { useParams } from '@startupjs/app'
import { ScrollView } from 'react-native'
import { Link, Div, TextInput, H1, Br, Select, Checkbox, Button } from '@startupjs/ui'
import { CheckboxSet } from 'components'
import './index.styl'

const TYPE_OPTIONS = [
  { label: 'Normal', value: 1 },
  { label: 'Fire', value: 2 },
  { label: 'Water', value: 3 },
  { label: 'Electric', value: 4 },
  { label: 'Grass', value: 5 },
  { label: 'Ice', value: 6 },
  { label: 'Fighting', value: 7 },
  { label: 'Poison', value: 8 }
]

const ABILITY_OPTIONS = [
  { label: 'Electric Surge', value: 1 },
  { label: 'Aerilate', value: 2 },
  { label: 'Dry Skin', value: 3 },
  { label: 'Liquid Voice', value: 4 },
  { label: 'Steam Engine', value: 5 },
  { label: 'Flower Veil', value: 6 },
  { label: 'Grass Pelt', value: 7 },
  { label: 'Grassy Surge', value: 8 },
  { label: 'Ice Body', value: 9 },
  { label: 'Ice Face', value: 10 },
  { label: 'Ice Scales', value: 11 },
  { label: 'Corrosion', value: 12 },
  { label: 'Effect Spore', value: 13 },
  { label: 'Immunity', value: 14 },
]

const emptyPockemon = {
  name: '',
  url: '',
  abilities: [],
  description: ''
}

export default observer(function PEdit () {
  const params = useParams()
  const [pockemon, $pockemon] = useDoc('pockemons', params.id)
  const title = (params.id === undefined ? 'Add' : 'Edit') + ' pokemon'

  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [type, setType] = useState()
  const [abilities, setAbilities] = useState([])
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (pockemon) {
      setName(pockemon.name)
      setUrl(pockemon.url)
      setType(pockemon.type)
      setAbilities(pockemon.abilities)
      setDescription(pockemon.description)
    }
  }, [pockemon])

  const handleSave = () => {
    if (!pockemon) {
      $pockemon.add({
        name,
        url,
        type,
        abilities,
        description,
      })
    } else {
      $pockemon.setEach({
        name,
        url,
        type,
        abilities,
        description,
      })
    }
  }

  return pug`
    Div
      Link( to='/' ) Back
      Div.form
        H1 #{title}
        TextInput(
          label='Name'
          value=name
          onChangeText=setName
        )
        Br
        TextInput(
          label='Url'
          value=url
          onChangeText=setUrl
        )
        Br
        Select(
          label='Type'
          options=TYPE_OPTIONS
          value=type
          onChange=setType
        )
        Br
        CheckboxSet(
          label='Abilities'
          options=ABILITY_OPTIONS
          value=abilities
          onChange=setAbilities
        )
        Br
        TextInput(
          label='Description'
          multiline
          numberOfLines=4
          value=description
          onChangeText=setDescription
        )
        Br
        Button(
          color='primary'
          variant='flat'
          onPress=handleSave
        ) Save
  `
})
