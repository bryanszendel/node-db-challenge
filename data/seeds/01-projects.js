
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Learn BackEnd Development',
      description: 'Build APIs, server configurations, and databases to serve data to a client.',
      completed: false
    },
    {
      name: 'Finish Building Portfolio Website',
      description: 'Present self-made projects onto personal website.',
      completed: false
    },
    {
      name: 'Get a dev job',
      description: 'Get the job I have been working toward!',
      completed: false
    },
  ]);
};
