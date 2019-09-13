const express = require('express');

const Projects = require('./projects-model.js');
const Tasks = require('../tasks/tasks-model.js')

const router = express.Router();

//endpoints

router.get('/', (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the projects.'})
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  Projects.findProjectById(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the project.'})
    })
})

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params
  Tasks.findProjectTasks(id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the project tasks.' })
    })
})

router.post('/', (req, res) => {
  const projectData = req.body
  Projects.addProject(projectData)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error creating the project.'})
    })
})

module.exports = router;