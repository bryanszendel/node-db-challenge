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

function findProjectsById(id) {
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

function findProjectTasks(project_id) {

}

function addProject(projectData) {
  return db('projects')
    .insert(projectData)
    .then(project => {
      return project
    })
}