import React, { useState } from 'react'
import { Pokemon, DeleteModal } from 'components'
import { observer, emit, useQuery } from 'startupjs'
import { Div, Row, H1, Button, Modal, TextInput, Collapse, Pagination, Select } from '@startupjs/ui'
import { CheckboxSet } from 'components'
import { TYPE_OPTIONS } from '../../../model/PockemonModel'
import './index.styl'

const { Content } = Collapse

const PAGE_COUNT_OPTIONS = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
]

export default observer(function PHome () {
  const [deleteId, setDeleteId] = useState(null)
  const showModal = deleteId !== null

  const [nameFilter, setNameFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState([])
  const [collapsed, setCollapsed] = useState(false)

  const queryParams = { name: { $regex: nameFilter, $options: "$i" } }
  if (typeFilter.length) {
    queryParams.type = { $in: typeFilter }
  }
  const [pockemons, $pockemons] = useQuery('pockemons', queryParams)

  const [page, setPage] = useState(0)
  const [itemsInPage, setItemsInPage] = useState(5)
  const pageCount = Math.ceil(pockemons.length / itemsInPage)
  const realPage = Math.min(page, pageCount)
  let start = realPage * itemsInPage
  const end = Math.min((realPage + 1) * itemsInPage, pockemons.length)

  const handleClickNew = () => emit('url', '/pokemon')

  const handleClickDelete = id => {
    $pockemons.del(id)
    setDeleteId(null)
  }

  return pug`
    Div
      Row.header( align='between' vAlign='center' )  
        H1.title Pokemons
        Button(
          onPress=handleClickNew
          color='primary'
          variant='flat'
          size='l'
        ) Add New
      Collapse.filters(
        title='Filters'
        open=collapsed
        onChange=() => setCollapsed(!collapsed)
      )
        Content
          TextInput(
            label='Name'
            value=nameFilter
            onChangeText=setNameFilter
          )
          CheckboxSet(
            label='Types'
            options=TYPE_OPTIONS
            value=typeFilter
            onChange=setTypeFilter
          )
      Row.pagination(
        align='center'
      )
        Pagination(
          variant='compact'
          page=realPage
          pages=pageCount
          onChangePage=setPage
        )
        Select(
          value=itemsInPage
          onChange=setItemsInPage
          options=PAGE_COUNT_OPTIONS
          showEmptyValue=false
        )
      Div.grid
        Row.row( wrap align='center' )
          while start < end
            Div.item
              Pokemon(
                name=pockemons[start].name
                src=pockemons[start].url
                id=pockemons[start].id
                type=pockemons[start].type
                abilities=pockemons[start].abilities
                description=pockemons[start++].description
                onEdit=(id) => emit('url', '/pokemon/' + id)
                onDelete=(id) => setDeleteId(id)
              )
      DeleteModal(
        visible=showModal
        onDismiss=() => setDeleteId(null)
        onConfirm=() => handleClickDelete(deleteId)
      )
  `
})
