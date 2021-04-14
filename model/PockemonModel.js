import { BaseModel } from 'startupjs/orm'

export default class PockemonModel extends BaseModel {
  async addSelf({ name, url, type, abilities, description }) {
    await this.root.add(this.getCollection(), {
      id: this.id(),
      name,
      url,
      type,
      abilities,
      description,
    })
  }
}
