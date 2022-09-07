import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '7 days'
      });
      return token;
    } catch {
      return response.unauthorized('Invalid credentials');
    }
  }

  public async register({ auth, request, response }: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');

    const user = await User.create({
      email,
      password
    });

    return user.toJSON();
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke();
    return {
      revoked: true
    };
  }

  public async me({ auth, response }: HttpContextContract) {
    return {
      current_user: auth.user?.toJSON()
    };
  }
}
