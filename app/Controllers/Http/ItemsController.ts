import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'
import Warehouse from 'App/Models/Warehouse'

export default class ItemsController {
  public async index({}: HttpContextContract) {
    const items = await Item.all()
    return items
  }

  public async create({ request: req }: HttpContextContract) {
    const warehouseId = req.input('warehouse_id')
    if (warehouseId) {
      const warehouse = await Warehouse.find(warehouseId)
      if (!warehouse) return new Error('Warehouse not found')
      warehouse.related('items').create({
        name: req.input('name'),
        description: req.input('description'),
        quantity: req.input('quantity'),
        manufacturer: req.input('manufacturer'),
        serial_number: req.input('serial_number'),
      })
    }
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
