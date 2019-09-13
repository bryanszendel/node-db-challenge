const db = require('../data/db-config');

module.exports = {
  findTasks,
  addTasks,
}

function findTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', '=', 'p.id')
    .select(
      't.id',
      't.description',
      't.notes',
      't.project_id',
      'p.name as project_name',
      'p.description as project_description'
    )
    .then(tasks => {
      return tasks
    })
}

function addTasks(taskData) {
  return db('tasks')
    .insert(taskData)
    .then(task => {
      return task
    })
}