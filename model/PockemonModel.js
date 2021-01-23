import { BaseModel } from 'startupjs/orm'

export default class PockemonModel extends BaseModel {
  async add ({ name, url, type, abilities, description }) {
    await this.root.add(this.getCollection(), {
      id: this.getId(),
      name,
      url,
      type,
      abilities,
      description,
    })
  }
}
