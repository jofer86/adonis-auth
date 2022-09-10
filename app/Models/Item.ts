import { DateTime } from 'luxon'
import { BaseModel, column, HasManyThrough, hasManyThrough } from '@ioc:Adonis/Lucid/Orm'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public quantity: number

  @column()
  public manufacturer: string

  @column()
  public serialNumber: string

  @column()
  public warehouseId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
