import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    return 'Hello World'
  }

  public async create({ request }: HttpContextContract) {
    const product = await Product.create({
      name: request.input('name'),
      description: request.input('description'),
      manufacturer: request.input('manufacturer'),
      category: request.input('category'),
      subcategory: request.input('subcategory'),
      distributor: request.input('distributor'),
    })

    if (product) return product.toJSON()
    return new Error('Product not created')
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
