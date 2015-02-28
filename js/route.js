Todos.Router.map(function () {
  this.resource('Todos', {
    path : '/'
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model : function () {
    return this.store.find('todo');
  }
});
