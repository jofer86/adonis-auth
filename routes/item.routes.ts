import Route from '@ioc:Adonis/Core/Route'

Route.group(async () => {
  Route.get('items', 'ItemsController.index')
  Route.post('items', 'ItemsController.create')
  Route.get('items/:id', 'ItemsController.show')
  Route.put('items/:id', 'ItemsController.edit')
  Route.delete('items/:id', 'ItemsController.destroy')
})
  .prefix('api/v1')
  .middleware('auth:api')
