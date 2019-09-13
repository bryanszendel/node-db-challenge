const db = require('../data/db-config');

module.exports = {
  findProjects,
  findProjectsById,
  findProjectTasks,
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
      return projects
    })
}

function findProjectsById(id) {
  return db('projects')
    .where({ id: id }).first()
    .then(project => {
      return project
    })
}

function findProjectTasks(project_id) {
  
}

function addProject(projectData) {
  return db('projects')
    .insert(projectData)
    .then(project => {
      return project
    })
}