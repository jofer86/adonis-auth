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
    const last_name = request.input('last_name')
    const first_name = request.input('first_name')
    const company_name = request.input('company_name')
    const phone_number = request.input('phone_number')
    const address = request.input('address')
    const city = request.input('city')
    const state = request.input('state')
    const zip_code = request.input('zip_code')
    const country = request.input('country')
    const website = request.input('website')

    const user = await User.create({
      email,
      password,
      last_name,
      first_name,
      company_name,
      phone_number,
      address,
      city,
      state,
      zip_code,
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
