
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: 'Lambda School',
      description: 'Learn full-stack web development'
    }, //1
    {
      name: 'MacBook Pro',
      description: 'You will need a strong computer that can take 45 hours per week of dev work.'
    }, //2
    {
      name: 'Actual Projects',
      description: 'You need to have worked on actual projects'
    }, //3
    {
      name: 'Resume',
      description: 'Learn full-stack web development'
    }, //4
    {
      name: 'Express',
      description: 'You have been learning new technologies like Express'
    }, //5
    {
      name: 'Knex',
      description: 'Connect Node to the DB'
    }, //6
    {
      name: 'React.js',
      description: 'make sure you can display your backend data visually on the front end'
    }, //7
    {
      name: 'Documentation',
      description: 'get really good at reading documentation and browsing Google'
    }, //8
  ]);
};
