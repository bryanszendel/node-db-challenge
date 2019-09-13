
exports.up = function(knex) {
  return knex.schema

    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable()
      tbl.text('description', 500)
      tbl.boolean('completed', ).defaultTo('false').notNullable()
    })

    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description', 500).notNullable()
      tbl.text('notes', 500)
      tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.boolean('completed').defaultTo('false').notNullable()
    })

    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable().unique()
      tbl.text('description', 500)
    })

    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
