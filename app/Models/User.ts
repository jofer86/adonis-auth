import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  HasManyThrough,
  hasManyThrough,
} from '@ioc:Adonis/Lucid/Orm'
import Warehouse from './Warehouse'
import Item from './Item'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public lastName: string

  @column()
  public firstName: string

  @column()
  public companyName: string

  @column()
  public phoneNumber: string

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public zipCode: string

  @column()
  public country: string

  @column()
  public website: string

  @hasMany(() => Warehouse)
  public warehouses: HasMany<typeof Warehouse>

  @hasManyThrough([() => Item, () => Warehouse])
  public items: HasManyThrough<typeof Item>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
