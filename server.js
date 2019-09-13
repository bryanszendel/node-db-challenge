const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/projects-router.js')
const TasksRouter = require('./tasks/tasks-router.js')
const ResourcesRouter = require('./resources/resources-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

//Routes
server.use('/api/projects', ProjectsRouter)
server.use('/api/tasks', TasksRouter)
server.use('/api/resources', ResourcesRouter)


module.exports = server;