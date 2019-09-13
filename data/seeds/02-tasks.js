
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'Learn to build endpoints',
      notes: 'will be pretty easy to do, easier than you thought',
      project_id: 1,
      completed: false
    },
    {
      description: 'Learn to build a database',
      notes: 'It helps to have known SQL in the past',
      project_id: 1,
      completed: false
    },
    {
      description: 'Use knex.js to connect endpoints to the db',
      notes: 'This is easy to do when you know SQL, you just need to plug it in',
      project_id: 1,
      completed: false
    },
    {
      description: 'Have portfolio pieces in the first place',
      notes: 'Maybe build some APIs or another app',
      project_id: 2,
      completed: false
    },
    {
      description: 'Plug those projects into the website',
      notes: 'plug it in, plug it in',
      project_id: 2,
      completed: false
    },
    {
      description: 'Make a killer resume',
      notes: 'Past experience, project work, technologies used',
      project_id: 3,
      completed: false
    },
    {
      description: 'Fill out dozens of applications',
      notes: 'Just keep cranking away at it!',
      project_id: 3,
      completed: false
    },
  ]);
};
