const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.findResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the resources.'})
    })
})

router.post('/', (req, res) => {
  const resourceData = req.body
  Resources.addResource(resourceData)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error adding the resource.'})
    })
})

module.exports = router;