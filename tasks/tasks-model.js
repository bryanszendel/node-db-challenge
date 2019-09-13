const db = require('../data/db-config');

module.exports = {
  findTasks,
  findProjectTasks,
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
      'p.description as project_description',
      't.completed'
    )
    .then(tasks => {

      tasks.map(task => {
        if (task.completed === 1) {
          task.completed = true
          return tasks
        } else {
          task.completed = false
          return tasks
        }
      })
      return tasks;
    }) 
}

function findProjectTasks(id) {
  return db('tasks')
    .where('project_id', id)
    .then(tasks => {

      tasks.map(task => {
        if (task.completed === 1) {
          task.completed = true
          return tasks
        } else {
          task.completed = false
          return tasks
        }
      })
      return tasks;
    })
}

function addTasks(taskData) {
  return db('tasks')
    .insert(taskData)
    .then(ids => {
      db('projects').where({ id: ids[0] })
      .then(newTask => {
        return newTask
      })
    })
}