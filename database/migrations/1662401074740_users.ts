import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.string('last_name', 255).nullable()
      table.string('first_name', 255).nullable()
      table.string('company_name', 255).nullable()
      table.string('phone_number', 255).nullable()
      table.string('address', 255).nullable()
      table.string('city', 255).nullable()
      table.string('state', 255).nullable()
      table.string('zip_code', 255).nullable()
      table.string('country', 255).nullable()
      table.string('website', 255).nullable()
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
