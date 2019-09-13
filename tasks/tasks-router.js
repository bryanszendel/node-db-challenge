const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.findTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the tasks.'})
    })
})

router.post('/', (req, res) => {
  const taskData = req.body
  Tasks.addTasks(taskData)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error adding the task.'})
    })
})

module.exports = router