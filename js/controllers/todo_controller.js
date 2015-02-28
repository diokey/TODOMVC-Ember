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
