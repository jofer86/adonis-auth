import Route from '@ioc:Adonis/Core/Route'

Route.group(async () => {
  Route.get('products', 'ProductsController.index')
  Route.post('products', 'ProductsController.create')
  Route.get('products/:id', 'ProductsController.show')
  Route.put('products/:id', 'ProductsController.edit')
  Route.delete('products/:id', 'ProductsController.destroy')
})
  .prefix('api/v1')
  .middleware('auth:api')
