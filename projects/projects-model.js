const db = require('../data/db-config');
const tasks = require('../tasks/tasks-model.js')

module.exports = {
  findProjects,
  findProjectById,
  addProject
}

function findProjects() {
  return db('projects')
    .select(
      'id',
      'name',
      'description',
      'completed'
    )
    .then(projects => {

      projects.map(project => {
        if (project.completed === 1) {
          projects.completed = true
          return projects
        } else {
          project.completed = false
          return projects
        }
      })
      return projects
    }) 
}

function findProjectById(id) {
  // let tasksQuery = db('tasks').where('project_id', id)
  // let resourcesQuery = db('resources').where('project_id', id)
  return db('projects')
    .where({ id: id }).first()    
    .then(project => { 
        if (project.completed === 1) {
          project.completed = true
          return project 
      } else {
        project.completed = false
        return project
      }
    })
}

function addProject(projectData) {
  return db('projects')
    .insert(projectData)
    .then(project => {
      return project
    })
}