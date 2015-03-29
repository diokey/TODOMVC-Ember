import Ember from 'ember';

export default Ember.Route.extend({
  model : function () {
    var medicines = this.store.find('medicine');

    return medicines;
  },
  setupController : function (controller, model) {
    this._super(controller, model);
    var pagingAndSorting = this.store.find('pagingAndSorting',1);
    console.log(pagingAndSorting);
    controller.set('pagingAndSorting', pagingAndSorting);
  }
});
