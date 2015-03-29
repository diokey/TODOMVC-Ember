import Ember from 'ember';

export default Ember.Route.extend({
  model : function (params) {
    var medicines = this.store.find('medicine');

    return medicines;
  },
  setupController : function (controller, model) {
    this._super(controller, model);
    var pagingAndSorting = this.store.find('pagingAndSorting',1);
    controller.set('pagingAndSorting', pagingAndSorting);
  }
});
