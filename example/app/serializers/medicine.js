import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  extractArray: function(store, type, payload) {
    var pagination = payload.pagingAndSorting;
    pagination.fullListSize = payload.fullListSize;
    pagination.id = 1;
    store.createRecord('pagingAndSorting',pagination);
    return payload.list;
  }
});
