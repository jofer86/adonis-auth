import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'warehouses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.integer('zip_code').notNullable()
      table.string('country').notNullable()
      table.string('phone_number').notNullable()
      table.string('email').notNullable()
      table.string('website').nullable()

      table.integer('user_id').unsigned().references('users.id').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
