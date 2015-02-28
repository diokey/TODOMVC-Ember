Todos.TodosController = Ember.Controller.extend({
  actions : {
    createTodo : function () {
      var newTitle = this.get('newTitle');
      if (!newTitle.trim()) {
        return;
      }

      var todo = this.store.createRecord('todo', {
        title : newTitle,
        isCompleted : false
      });

      this.set('newTitle','');
      todo.save();
    }
  }
});

Todos.TodoController = Ember.ObjectController.extend({
  isCompleted : function (key, value) {
    var model = this.get('model');
    if ( value === undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();

      return value;
    }
  }.property('model.isCompleted')
});
