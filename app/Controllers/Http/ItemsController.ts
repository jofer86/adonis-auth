import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'
import Product from 'App/Models/Product'
import Warehouse from 'App/Models/Warehouse'

export default class ItemsController {
  public async index({}: HttpContextContract) {
    const items = await Item.all()
    return items
  }

  public async create({ request: req }: HttpContextContract) {
    const warehouseId = req.input('warehouse_id')
    const productId = req.input('product_id')
    let warehouse = await Warehouse.find(warehouseId)
    let product = await Product.find(productId)
    console.log(product)

    if (!warehouse || !product) return new Error('Warehouse or Product not found')

    console.log('not here')

    const item = await Item.create({
      price: req.input('price'),
      quantity: req.input('quantity'),
      productId: req.input('product_id'),
      warehouseId: req.input('warehouse_id'),
    })
    console.log(item)

    if (item) return item.toJSON()
    return { error: 'Item not created' }
  }

  public async show({}: HttpContextContract) {
    return 'Hello World'
  }

  public async edit({}: HttpContextContract) {
    return 'Hello World'
  }

  public async destroy({}: HttpContextContract) {
    return 'Hello World'
  }
}
