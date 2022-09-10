import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Warehouse from './Warehouse'
import Product from './Product'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public price: number

  @column()
  public quantity: number

  @column()
  public productId: number

  @column()
  public warehouseId: number

  @belongsTo(() => Warehouse)
  public warehouse: BelongsTo<typeof Warehouse>

  @belongsTo(() => Product)
  public author: BelongsTo<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
