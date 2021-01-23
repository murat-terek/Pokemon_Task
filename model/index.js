import TestThing from './TestThingModel'
import PockemonModel from './PockemonModel'

export default function (racer) {
  racer.orm('testThings.*', TestThing)
  racer.orm('pockemons.*', PockemonModel)
}
