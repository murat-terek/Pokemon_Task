import PockemonModel from './PockemonModel'

export default function (racer) {
  racer.orm('pockemons.*', PockemonModel)
}
