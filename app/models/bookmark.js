import DS from 'ember-data';

export default DS.Model.extend({
  bookmark: DS.attr('string'),
  url: DS.attr('string')
});
