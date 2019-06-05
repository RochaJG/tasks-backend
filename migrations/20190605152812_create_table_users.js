exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table
      .string('email')
      .notNull()
      .unique()
    table.string('password').notNull()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
