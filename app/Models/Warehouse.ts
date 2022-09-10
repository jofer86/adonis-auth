import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Item from './Item'
import User from './User'

export default class Warehouse extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public zipCode: number

  @column()
  public country: string

  @column()
  public phoneNumber: string

  @column()
  public email: string

  @column()
  public website: string

  @column()
  public userId: number

  @belongsTo(() => User)
  public author: BelongsTo<typeof User>

  @hasMany(() => Item)
  public items: HasMany<typeof Item>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
