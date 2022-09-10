/* eslint-disable @typescript-eslint/naming-convention */
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
    const zip_code = req.input('zip_code')
    const country = req.input('country')
    const phone_number = req.input('phone_number')
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
      zip_code,
      country,
      phone_number,
      website,
      user_id: user.id,
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
    const zip_code = req.input('zip_code')
    const country = req.input('country')
    const phone_number = req.input('phone_number')
    const email = req.input('email')
    const website = req.input('website')

    const warehouse = await Warehouse.find(id)
    if (warehouse) {
      warehouse.name = name
      warehouse.address = address
      warehouse.city = city
      warehouse.state = state
      warehouse.zip_code = zip_code
      warehouse.country = country
      warehouse.phone_number = phone_number
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
