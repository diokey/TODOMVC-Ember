import DS from 'ember-data';

export default DS.Model.extend({
  recommendedDosage : DS.attr('string'),
  name : DS.attr('string'),
  active : DS.attr('boolean'),
  identifiers : []
});
