Todos.TodosController = Ember.ArrayController.extend({
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
  },

  remaining : function () {
    return this.get('model').filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection : function () {
    var remaining = this.get('remaining');
    console.log(remaining);
    return remaining === 1 ? 'todo' : 'todos';
  }.property('remaining')

});

Todos.TodoController = Ember.ObjectController.extend({
  actions : {
    editTodo : function () {
      console.log('called');
     this.set('isEditing',true);
    },
    acceptChanges : function () {
      this.set('isEditing', false);

      if(Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },
    removeTodo : function () {
      var todo = this.get('model');

      todo.deleteRecord();
      todo.save();
    }
  },

  isEditing : false,
  
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
