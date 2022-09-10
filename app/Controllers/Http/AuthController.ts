/* eslint-disable @typescript-eslint/naming-convention */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '7 days',
      })
      return {
        email: auth.user?.email,
        token: token.toJSON(),
      }
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async register({ request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const lastName = request.input('last_name')
    const firstName = request.input('first_name')
    const companyName = request.input('company_name')
    const phoneNumber = request.input('phone_number')
    const address = request.input('address')
    const city = request.input('city')
    const state = request.input('state')
    const zipCode = request.input('zip_code')
    const country = request.input('country')
    const website = request.input('website')

    const user = await User.create({
      email,
      password,
      lastName,
      firstName,
      companyName,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
      country,
      website,
    })
    return user.toJSON()
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }

  public async me({ auth }: HttpContextContract) {
    return {
      current_user: auth.user?.toJSON(),
    }
  }
}
