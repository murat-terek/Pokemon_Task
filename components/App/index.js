import React from 'react'
import { Div, Span, Row, Content, H1, Button } from '@startupjs/ui'
import Pokemon from '../Pokemon'
import './index.styl'

const pokemons = [
  {
    name: 'Пикачу',
    src: 'https://pokemongolife.ru/p/Pikachu.png',
    type: ['Электрический'],
    abilities: ['jump', 'sleep'],
    description: 'Всякий раз, когда Пикачу встречает что-то новое, то может поразить это электрическим разрядом. Если вы столкнетесь, например, с почерневшими ягодами - это прямое доказательство того, что Пикачу ошибочно принял их за что-то другое. Пикачу хранит заряд электричества в аккумулирующих мешочках в своих щеках. Когда Покемон спит, они заряжаются. Иногда существо может разрядить небольшое количество заряда при пробуждении.'
  },
  {
    name: 'Бульбазавр',
    src: 'https://pokemongolife.ru/p/Bulbasaur.png',
    type: ['Травяной', 'Ядовитый'],
    abilities: ['jump', 'sleep'],
    description: 'Бульбазавра можно увидеть дремлющим при ярком солнечном свете. На его спине есть семя. На солнце семя растет и становится больше.'
  },
  {
    name: 'Чармандер',
    src: 'https://pokemongolife.ru/p/Charmander.png',
    type: ['Огненный'],
    abilities: ['jump', 'sleep'],
    description: 'Пламя, горящее на кончике хвоста, является показателем его эмоций. Пламя колышется, когда Чармандер доволен. Если Покемон приходит в ярость, пламя горит интенсивнее.'
  },
  {
    name: 'Ивизавр',
    src: 'https://pokemongolife.ru/p/Ivysaur.png',
    type: ['Травяной', 'Ядовитый'],
    abilities: ['jump', 'sleep'],
    description: 'На спине этого Покемона есть почка. Для того чтобы выдержать такой вес, Ивизавру нужно иметь толстое тело и сильные ноги. Если существо начинает тратить больше времени, лежа на солнце, это признак того, что почка будет цвести и превратится в большой цветок в ближайшее время.'
  }
]

const App = () => {
  const handleClickNew = () => {
    console.log('handleClickNew')
  }

  return pug`
    Content.content( width='wide' )
      Row.header( align='between' vAlign='center' )  
        H1 Pokemons
        Button(
          onPress=handleClickNew
          color='primary'
          variant='flat'
          size='l'
        ) Add New
      Row.row( wrap align='center' )
        each pokemon, index in pokemons
          Div.item
            Pokemon(
              name=pokemons.name
              src=pokemon.src
              index=index
              type=pokemon.type
              abilities=pokemon.abilities.join(', ')
              description=pokemon.description
              onEdit=(index) => console.log('onEdit', index)
              onDelete=(index) => console.log('onDelete', index)
            )
  `
}

export default App
