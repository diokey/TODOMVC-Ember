import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin,{
  normalize: function(type, hash) {
    if (hash.vecnaId) {
      hash.id = hash.vecnaId;
    }

    return this._super.apply(this, arguments);
  }
});
