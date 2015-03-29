import DS from 'ember-data';

export default DS.Model.extend({
  pageSize : DS.attr('number'),
  ascending : DS.attr('boolean'),
  pageNumber : DS.attr('number'),
  fullListSize : DS.attr('number')
});
