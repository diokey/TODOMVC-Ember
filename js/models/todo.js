Todos.Todo = DS.Model.extend({
  title : DS.attr('string'),
  isCompleted : DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id : 1,
    title : 'Learn Ember.js',
    completed : true
  },
  {
    id : 2,
    title : '...',
    completed : false
  },
  {
    id : 3,
    title : 'Profit!',
    completed : false
  }
];
