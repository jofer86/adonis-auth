import Route from '@ioc:Adonis/Core/Route'

Route.group(async () => {
  Route.get('warehouses', 'WarehousesController.index')
  Route.post('warehouses', 'WarehousesController.create')
  Route.get('warehouses/:id', 'WarehousesController.show')
  Route.put('warehouses/:id', 'WarehousesController.edit')
  Route.delete('warehouses/:id', 'WarehousesController.destroy')
})
  .prefix('api/v1')
  .middleware('auth:api')
