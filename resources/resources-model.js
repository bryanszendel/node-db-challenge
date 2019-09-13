const db = require('../data/db-config');

module.exports = {
  findResources,
  addResource
}

function findResources() {
  return db('resources')
    .then(resources => {
      return resources;
    })
}

function addResource(resourceData) {
  return db('resources')
    .insert(resourceData)
    .then(resource => {
      return resource
    })
}