import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Warehouse from 'App/Models/Warehouse'

export default class WarehousesController {
  public async index({}: HttpContextContract) {
    const warehouses = await Warehouse.all()
    return warehouses
  }

  public async create({ auth, request: req }: HttpContextContract) {
    const name = req.input('name')
    const address = req.input('address')
    const city = req.input('city')
    const state = req.input('state')
    const zipCode = req.input('zip_code')
    const country = req.input('country')
    const phoneNumber = req.input('phone_number')
    const email = req.input('email')
    const website = req.input('website')

    const user = auth.user
    if (!user) return new Error('User not found')
    const warehouse = await user.related('warehouses').create({
      name,
      address,
      city,
      email,
      state,
      zipCode,
      country,
      phoneNumber,
      website,
      userId: user.id,
    })

    return warehouse.toJSON()
  }

  public async show({ request: req }: HttpContextContract) {
    const id = req.input('id')
    const warehouse = await Warehouse.find(id)
    return warehouse?.toJSON()
  }

  public async edit({ request: req }: HttpContextContract) {
    const id = req.input('id')
    const name = req.input('name')
    const address = req.input('address')
    const city = req.input('city')
    const state = req.input('state')
    const ziCode = req.input('zip_code')
    const country = req.input('country')
    const phoneNumber = req.input('phone_number')
    const email = req.input('email')
    const website = req.input('website')

    const warehouse = await Warehouse.find(id)
    if (warehouse) {
      warehouse.name = name
      warehouse.address = address
      warehouse.city = city
      warehouse.state = state
      warehouse.zipCode = ziCode
      warehouse.country = country
      warehouse.phoneNumber = phoneNumber
      warehouse.email = email
      warehouse.website = website
      await warehouse.save()
    }
    return warehouse?.toJSON()
  }

  public async destroy({ request: req }: HttpContextContract) {
    const id = req.input('id')
    const warehouse = await Warehouse.find(id)
    if (warehouse) {
      await warehouse.delete()
    }
    return {
      deleted: true,
    }
  }
}
