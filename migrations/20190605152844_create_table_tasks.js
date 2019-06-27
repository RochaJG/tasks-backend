exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('desc').notNull()
    table.dateTime('estimateAt')
    table.dateTime('doneAt')
    table
      .integer('userId')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNull()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}
